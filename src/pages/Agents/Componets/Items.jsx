import React from 'react';
import styled from "styled-components";
import { Selector, PaginationContainer } from 'Component';
import { IconProvider } from 'utils/common.utils';
import { SocialShare } from 'utils/ObjectUtils';
import { Input, Skeleton, Pagination } from "antd";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
import { FaTelegramPlane } from 'react-icons/fa';
import { Modal } from 'Component';
import { DatePicker } from 'antd';
import { enLangauge } from 'Contents/en-langauge';
import { useFetch } from 'hooks';
import toast from 'react-hot-toast';
const { RangePicker } = DatePicker;
const Items = () => {
  const [state, SetState] = React.useState(false);
  const [haveToshare, SetShare] = React.useState(false);
  const [unapproval, SetUnapproval] = React.useState([]);

  const onFailure = React.useCallback((errors) => {
    toast.error(errors?.message);
  }, [])

  const onSuccess = React.useCallback((response) => {
    if (response?.message) {
      toast.success(response?.message);
    }
  }, [])
  // bulk action 
  const { isLoading, data, callFetch } = useFetch({
    initialUrl: `/agents/unapproved_agents`,
    skipOnStart: false,
    onSuccess,
    onFailure
  });


  const bulkAction = React.useCallback((e) => {
    if (e) {
      if (unapproval?.some((i) => i === e)) {
        let undo = unapproval.filter((i) => i !== e)
        SetUnapproval(undo)
      } else {
        SetUnapproval(data => [...data, e]);
      }
    }
  }, [unapproval])

  const indiviualAction = React.useCallback((e) => {
    const formData = new FormData();
    if (e === `Approved`) {
      Array(1).fill().map(() => {
        formData.append("agent_id", e);
        return e ;
      });
      callFetch({
        url: `/agents/approve_agent`,
        method: 'post',
        data: formData,
      })
      setTimeout(() => {
        callFetch({
          url: `/agents/unapproved_agents`,
          method: 'get',
        });
      }, [900])
      SetUnapproval([])
    }

  }, [callFetch])

  const allListActionCheck = React.useCallback((array) => {
    if (!isLoading) {
      if (array?.length === unapproval?.length) {
        SetUnapproval([])
      } else {
        SetUnapproval([])
        array?.map((agent, index) => SetUnapproval(data => [...data, agent?.id]))
      }
    }
  }, [unapproval, isLoading])

  const searchingFilter = React.useCallback((e) => {
    const searchValue = e?.target?.value;
    console.log(searchValue, "===")
  }, [])

  const dateRangeFilteration = React.useCallback((e) => {
    const [start, end] = e;
    console.log(start, end, "====> ")
  }, [])

  const selectionFilterOne = React.useCallback((e) => {
    console.log(e);
  }, [])

  const selectionFilterTwo = React.useCallback((e) => {
    const formData = new FormData()
    if (unapproval?.length > 0) {
      if (e === `Approved`) {
        unapproval?.map((data) => {
          formData.append("agent_id", data);
          return data;
        })
        callFetch({
          url: `/agents/approve_agent`,
          method: 'post',
          data: formData,
        })
        setTimeout(() => {
          callFetch({
            url: `/agents/unapproved_agents`,
            method: 'get',
          });
        }, [900])

        SetUnapproval([])
      }
    } else {
      toast.error('Have not selected any Item');
    }

  }, [callFetch, unapproval])

  const paginationAction = React.useCallback((page, b) => {
    callFetch({
      url: `/agents/unapproved_agents?page=${page}`,
      method: 'get'
    })
  }, [callFetch])

  const Button = React.memo(({ IconClassName, color, icon, children }) => (
    <button className="bg-white w-full text-center hover:bg-gray-100 flex text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
      <span>
        <IconProvider className={IconClassName ?? ''} color={color}>
          {icon}
        </IconProvider>
      </span>
      <span>
        {
          children
        }
      </span>
    </button>
  ))


  const Filteration = React.memo(() => {
    return (
      <React.Fragment>
        <Modal title={"Filter By Date "} state={state} SetState={SetState}>
          <div className="grid w-full">
            <div className="m-auto">
              <RangePicker onChange={dateRangeFilteration} />
            </div>
          </div>
        </Modal>
        {/*  */}
        <Modal title={"Share "} state={haveToshare} SetState={SetShare}>
          <div className="grid w-full">
            <div className="m-auto">
              <div className='grid lg:grid-col-4 md:grid-cols-3 grid-cols-2 gap-2'>
                {
                  SocialShare?.map((i, index) => (
                    <div key={index}>
                      <ShareButton theme={{ bg: i?.bg, color: i?.color }} >
                        <div className="inline-flex">
                          <IconProvider className={i?.className ?? ''} color={i?.color}>
                            {i?.icon}
                          </IconProvider>
                          <span>{i?.title}</span>
                        </div>
                      </ShareButton>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Modal >
        <div className="grid lg:px-4  md:px-2 px-1 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mb-[15px]">
          <div className="lg:col-span-2 inline">
            <span><TableHeader>{enLangauge.AGENT_DETAIL_TABLE_HEADER_TITLE} </TableHeader> </span>  <span>{data?.unapproved_agents?.data?.length}</span>
          </div>
          <div className="lg:col-span-3  md:col-span-2 ">
            <div className='grid lg:grid-cols-6 md:grid-cols-9 grid-cols-2'>
              <div className='lg:col-span-2 md:col-span-2 col-span-1 px-1 lg:py-0 md:py-0 py-1 '>
                <Input onChange={searchingFilter} style={{ width: "100% ", boxShadow: "none" }} placeholder="Search..." prefix={<BiSearch />} />
              </div>

              <div className="px-1 lg:py-0 md:py-0 py-1 ">
                <CustomeText>
                  <Select onChange={selectionFilterOne} size={"defaut"} theme={{ width: "100%" }} defaultOption={"Filter"} options={["Pending", "Approved", "InActive"]} />
                </CustomeText>
              </div>
              <div className="px-x lg:py-0 md:py-0 py-1 " onClick={() => SetState(!state)}>
                <Button icon={<BiFilterAlt />} IconClassName={'text-[20px] pt-1 mr-1'} color={""}>{enLangauge.AGENT_DETAIL_FILTER}</Button>
              </div>
              <div className="px-1 lg:py-0 md:py-0 py-1 " onClick={() => SetShare(!haveToshare)}>
                <Button icon={<FaTelegramPlane />} IconClassName={'text-[20px] pt-1 mr-1'} color={""}>{enLangauge.AGENT_DETAIL_SHARE} </Button>
              </div>
              <div className="px-1 lg:py-0 md:py-0 py-1 ">
                <CustomeText>
                  <Select onChange={selectionFilterTwo} size={"defaut"} theme={{ width: "100%" }} defaultOption={"Pending"} options={["Pending", "Approved", "InActive"]} />
                </CustomeText>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }, [])

  return (
    <React.Fragment>
      <div className=" mt-3">
        <BoxCantainer>
          <Filteration />
          {
            isLoading ? (
              <React.Fragment>
                <Skeleton active />
                <br />
                <Skeleton active />
              </React.Fragment>
            ) : (
              <div className="lg:overflow-x-hidden md:overflow-x-hidden overflow-x-scroll ">
                <table className="min-w-full leading-normal">
                  <thead >
                    <tr className='border-b-2 border-t-2 border-[#ccccd0]'>
                      <th className="px-5 flex py-3   bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        <span className="mx-2  ">
                          <input type="checkbox" className="checkbox" onClick={() => allListActionCheck(data?.unapproved_agents?.data)} />
                        </span>
                        <span className='mt-1'>
                          {enLangauge.AGENT_DETAIL_TABLE_HEADER_PRODUCT_NAME}
                        </span>
                      </th>
                      <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {enLangauge.AGENT_DETAIL_TABLE_HEADER_UNIT_PRICE}
                      </th>
                      <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {enLangauge.AGENT_DETAIL_TABLE_HEADER_DISCOUNT}
                      </th>
                      <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {enLangauge.AGENT_DETAIL_TABLE_HEADER_TOTAL_ORDER}
                      </th>
                      <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {enLangauge.AGENT_DETAIL_TABLE_HEADER_ACTION}
                      </th>
                      <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        {enLangauge.AGENT_DETAIL_TABLE_HEADER_STATUS}
                      </th>
                      <th className="px-5 py-3  bg-gray-100" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data?.unapproved_agents?.data?.map((agent, index, array) => (

                        <tr className=''>
                          <td className="px-5 py-3   bg-white text-sm">
                            <div className="flex">
                              <div className="mx-2 pt-2 ">
                                {
                                  array?.length === unapproval?.length ? (
                                    <input type="checkbox" className="checkbox" checked />
                                  ) : (
                                    <input type="checkbox" className="checkbox" onClick={() => bulkAction(agent?.id)} />
                                  )
                                }
                              </div>
                              <div className="flex-shrink-0 w-10 h-10">
                                <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="loading..." />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap mt-2">
                                  <CustomeText>{agent?.name}</CustomeText>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"><CustomeText>$20,000</CustomeText></p>
                          </td>
                          <td className="px-5 py-3  bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap"><CustomeText>$10,000</CustomeText></p>
                          </td>
                          <td className="px-5 py-3 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                              <span className="relative"><CustomeText>98</CustomeText></span>
                            </span>
                          </td>
                          <td className="px-5 py-3  bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                              <span className="relative">
                                <CustomeText>
                                  <Select size={"small"} onChange={indiviualAction} defaultOption={"Pending"} options={["Pending", "Approved", "InActive"]} />
                                </CustomeText>
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-3  bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                              <span className="relative"><Status>{enLangauge.AGENT_DETAIL_TABLE_STATUS_ACTIVE}</Status></span>
                            </span>
                          </td>
                        </tr>

                      ))
                    }
                  </tbody>
                </table>
              </div>
            )
          }
          <div className="pt-2 lg:px-3 md:px-2 px-0">
            <PaginationContainer labelText={"Total : "
              + "" + data?.unapproved_agents?.total + " of Page " + data?.unapproved_agents?.current_page
            }>
              <Pagination showSizeChanger={false}
                defaultCurrent={1}
                total={data?.unapproved_agents?.total}
                onChange={paginationAction} />
            </PaginationContainer>
          </div>
        </BoxCantainer>
      </div>
    </React.Fragment>
  );
}

export default Items;

const BoxCantainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
border-radius: 10px;
padding:15px 15px 15px 15px;
`;

const CustomeText = styled.div`
// font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #6E7079;

`;
const Status = styled.button`
width: 56px;
background: ${props => props?.theme?.bg ?? '#FFF2E2'};
color:black;
border-radius: 8px;
padding:2px 5px;
`;
const Select = styled(Selector)`
width: ${props => props?.theme.width ?? '80px !important'};
&& :hover {
  box-shadow:none !important;
}import { IconProvider } from 'utils/common.utils';

`;

const ShareButton = styled.button`
padding:3px 10px;
background:${props => props?.theme.bg};
color:${props => props?.theme?.color};
border-radius:3px;
width:100%;
`;

const TableHeader = styled.span`
font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
color: #45464E;

`;