import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { AiFillHome } from "react-icons/ai";
import { IconProvider, TxtCopy } from 'utils/common.utils';
import { MdOutlineContentCopy } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { Selector } from 'Component';
const UserDetails = () => {
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    console.log(state, "state === value of selctor ")
  }, [state])
  const copyID = () => {
    TxtCopy("agentID")
  }

  const AgentBreadcrumbDetails = React.memo((props) => {
    return (
      <React.Fragment>
        <Breadcrumb>
          <IconProvider className={`text-white text-lg float-right cursor-pointer `} color={`#2B4C9B`}>
            <AiFillHome />
          </IconProvider>
          <Breadcrumb.Item >
            <BreadcrumbLabel theme={{ color: '#2B4C9B' }}>Agent</BreadcrumbLabel>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <BreadcrumbLabel>View Agent</BreadcrumbLabel>
          </Breadcrumb.Item >
        </Breadcrumb>
        <div className='lg:flex lg:justify-between md:flex md:justify-between block'>
          <div>
            <div className='flex justify-between'>
              <div>
                <CustomeTxtOne theme={{ color: "black" }}>
                  Agent Since
                </CustomeTxtOne>
                <CustomeTxtOne >
                  12 Sept 2022 - 12:55 pm
                </CustomeTxtOne>
              </div>
              <div className="pl-3">
                <CustomeTxtOne theme={{ color: "black" }}>
                  Agent ID
                </CustomeTxtOne>
                <CustomeTxtOne id="agentID">
                  Ej784klm
                </CustomeTxtOne>
              </div>
              <span className="px-2">
                <IconProvider onClick={copyID} className={`text-white text-lg float-right cursor-pointer `} color={`#2E72B9`}>
                  <MdOutlineContentCopy />
                </IconProvider>
              </span>
            </div>
          </div>
          <div className='lg:flex md:flex lg:justify-end md:justify-end'>
            <div className='grid px-2'>
              <div className="m-auto">
                <CustomeButton theme={{ bg: "#2B4C9B", color: "#fff" }}>Edit Agents</CustomeButton>
              </div>
            </div>
            <div className='grid px-2'>
              <div className="m-auto">
                <CustomeButton theme={{ bg: "#E95050", color: "#fff" }}>Suspend Agents</CustomeButton>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }, [])
  return (
    <React.Fragment>
      <div className="lg:px-4 md:px-3 px-1">
        <AgentBreadcrumbDetails />
        <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-3 mt-2">
          <div className="col-span-4">
            <BoxCantainer>
              <div className=" h-auto grid grid-cols-2 gap-2 content-between pt-2">
                <div className="">
                  <div className="float-left">
                    <div className="flex  ">
                      <div className="pt-1">
                        <Img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="loading.." />
                      </div>
                      <div>
                        <div className="pl-3">
                          <Title>Lorem Snackpo</Title>
                          <div>
                            <span>
                              <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                                Last Order
                              </Title>
                            </span>
                            <span>
                              <Title theme={{ color: "black", fontSize: "12px" }}>
                                12 Sept 2022
                              </Title>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="float-right mt-1">
                    <Status>Active</Status>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="float-left">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Phone Number
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          +91 962-114-4328
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Email ID
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          lenwoper@gmail.com
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BoxCantainer>
          </div>
          <div className="col-span-8">
            <BoxCantainer>
              <div className=" h-auto grid grid-cols-2 gap-2 content-between pt-2">
                <div className="">
                  <div className="float-left">
                    <div className="flex  ">
                      <div className="pt-1">
                        <IconProvider className={`text-white text-lg float-right cursor-pointer `} color={`#2B4C9B`}>
                          <HiOutlineLocationMarker />
                        </IconProvider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="float-right mt-1">

                  </div>
                </div>
                <div className="">
                  <div className="float-left">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Home Address
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          2464 Royal Ln. Mesa, New Jersey 45463
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Billing Address
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          2464 Royal Ln. Mesa, New Jersey 45463
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BoxCantainer>
          </div>
          {/*  */}
          <div className="col-span-4">
            <BoxCantainer>
              <div className=" h-auto grid grid-cols-2 gap-2 content-between pt-2">
                <div className="">
                  <div className="float-left">
                    <div className="flex  ">
                      <div className="pt-1">
                        <IconProvider className={`text-white text-lg float-right cursor-pointer `} color={`#2B4C9B`}>
                          <BsHandbag />
                        </IconProvider>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="float-right mt-1">
                    <Select size={"small"} defaultOption={"Delhi"} setState={setState} options={["Delhi", "Mumbai", "London"]} />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols1">
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        All offer
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          10
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Accomdation offer
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          2
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Car Rentals
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          9
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BoxCantainer>
          </div>
          <div className="col-span-8">
            <BoxCantainer>
              <div className=" h-auto grid grid-cols-2 gap-2 content-between pt-2">
                <div className="">
                  <div className="float-left">
                    <div className="flex  ">
                      <div className="pt-1">
                        <IconProvider className={`text-white text-lg float-right cursor-pointer `} color={`#2B4C9B`}>
                          <BsHandbag />
                        </IconProvider>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="float-right mt-1">
                    <Select size={"small"} defaultOption={"Delhi"} options={["Delhi", "Mumbai", "London"]} />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols1">
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        All offer
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          10
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Accomdation offer
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          2
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 ">
                  <div className="">
                    <div>
                      <Title theme={{ color: "#9295A3", fontSize: "12px" }}>
                        Car Rentals
                      </Title>
                      <span>
                        <Title theme={{ color: "black", fontSize: "12px" }}>
                          9
                        </Title>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BoxCantainer>
          </div>
        </div>
      </div >
    </React.Fragment >
  );
}

export default UserDetails;


const BreadcrumbLabel = styled.span`
// font-family: 'Open Sans';
font-style: normal;
padding-bottom:3px;
font-weight: 400;
font-size: 12px;
line-height: 16px;
padding-left:2px;
color:${props => props?.theme?.color ?? '#9295A3'}
`;
const CustomeTxtOne = styled.span`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
padding-left:2px;
padding-right:2px;
font-size: 16px;
line-height: 22px;
color: ${props => props?.theme?.color ?? '#9295A3'}

`;
const CustomeButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 17px 16px;
gap: 10px;
color: ${props => props?.theme?.color ?? '#fff'};
width: 167px;
height: 36px;
background: ${props => props?.theme?.bg ?? '#E95050'};
border-radius: 12px;
flex: none;
order: 1;
flex-grow: 0;
`;
const BoxCantainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
border-radius: 10px;
padding:0px 15px 15px 15px;
`;
const Img = styled.img`
width: 45px;
height: 45px;
border-radius:3px;
`;

const Title = styled.div`
// font-family: 'Open Sans';
font-style: normal;
margin-bottom:0.5px;
font-weight: 400;
font-size: ${porps => porps?.theme?.fontSize ?? '14px'};
color: ${props => props?.theme?.color ?? '#9295A3'};

`;
const Status = styled.button`
width: 56px;
background: ${props => props?.theme?.bg ?? '#6FCF97'};
color:#fff;
border-radius: 8px;
padding:2px 5px;
`;
const Select = styled(Selector)`
width:80px !important;
&& :hover {
  box-shadow:none !important;
}
`;