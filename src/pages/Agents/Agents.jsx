import React from 'react';
import styled from 'styled-components';
import { Tab, RingProgressSimple, ColumnStackPlot, Pagination } from 'Component';
import { IconProvider } from 'utils/common.utils';
import { Tooltip } from 'antd';
import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from 'react-icons/hi';
import { IoIosArrowForward } from "react-icons/io";
const Agents = () => {
  const SiteSpeedComponent = React.useMemo(() => {
    return [
      {
        label: 'Weekly',
        key: 'weekly',
        children: <ColumnStackPlot />
      },
      {
        label: 'Month',
        key: 'month',
        children: <ColumnStackPlot />
      },
      {
        label: 'Year',
        key: 'year',
        children: <ColumnStackPlot />
      }
    ]
  }, [])


  const SiteSpeedTabLeftComponent = React.memo(() => {
    return (
      <React.Fragment>
        <CustomeLabel>Activities</CustomeLabel>
      </React.Fragment>
    )
  }, []);
  const SiteSpeedTabRightComponent = React.memo(() => {
    return (
      <React.Fragment>
        <div className="">
          <Tooltip placement="leftTop" color="black" title={
            <React.Fragment>
              <button>Click </button>
              <p className="cursor-pointer">lorem ipsum </p>
            </React.Fragment>} arrowPointAtCenter>
            <span>
              <IconProvider className={`text-[4D5E80] text-lg float-right cursor-pointer `} color={`#4D5E80`}>
                <HiOutlineDotsVertical />
              </IconProvider>
            </span>
          </Tooltip>
        </div>
      </React.Fragment>
    )
  }, [])

  const SiteSpeedProps = React.useMemo(() => {
    return {
      data: SiteSpeedComponent,
      leftComponet: <SiteSpeedTabLeftComponent />,
      rightComponent: <SiteSpeedTabRightComponent />
    }
  }, [SiteSpeedComponent]);

  const TopAgent = React.memo(() => {
    return (
      <React.Fragment>
        <AgentContainer>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
            <div>
              <div className="flex items-center ">
                <div className="">
                  <Img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="loading... " />
                </div>
                <div className="pl-2">
                  <CustomeTxt>Lenny Wilson</CustomeTxt>
                  <CustomeText>Lima</CustomeText>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 lg:pt-3 md:pt-3">
                <div className='float-left text-center'>
                  <CustomeTxt>789 </CustomeTxt>
                  <CustomeText>Lima</CustomeText>
                </div>
                <div className='float-right  text-center'>
                  <CustomeTxt>489</CustomeTxt>
                  <CustomeText>Lima</CustomeText>
                </div>
              </div>
            </div>
            <div className="lg:inline md:inline grid ">
              <div className="lg:m-0 md:m-0 m-auto">
                <div className="flex lg:float-right md:float-right float-none pr-3 lg:pt-2 md:pt-2 lg:pb-0 md:pb-0 pb-2 ">
                  <div className=''>
                    <AgentRevenueTxt>$4,089</AgentRevenueTxt>
                    <CustomeText>Lima</CustomeText>
                  </div>
                  <div className="grid mt-3 ml-3 ">
                    <div className="auto l">
                      <AddBtn >
                        <IconProvider className={`text-white m-auto text-lg float-right cursor-pointer `} color={`#1B263C`}>
                          <IoIosArrowForward />
                        </IconProvider>
                      </AddBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AgentContainer>
      </React.Fragment>
    )
  }, [])

  return (
    <React.Fragment>
      <div className="lg:px-4 md:px-3 px-1">
        <div className=" grid lg:grid-cols-12 mt-4  md:grid-cols-1 grid-cols-1 gap-3">
          <div className="lg:col-span-3 md:col-span-3 col-span-1">
            <div className="">
              <BoxCantainer>
                <div className="p-[15px]">
                  <div className="grid  grid-cols-6  ">
                    <div className='col-span-5 '>
                      <span className="text-white font-semibold">
                        <Label>Insights</Label>
                      </span>
                    </div>
                    <div className=" col-span-1 ">
                      <Tooltip placement="leftTop" color="black" title={
                        <React.Fragment>
                          <button>Click </button>
                          <p className="cursor-pointer">lorem ipsum </p>
                        </React.Fragment>} arrowPointAtCenter>
                        <span>
                          <IconProvider className={`text-white text-lg float-right cursor-pointer `} color={`#4D5E80`}>
                            <HiOutlineDotsHorizontal />
                          </IconProvider>
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="grid p-4">
                    <div className="m-auto">
                      <RingProgressSimple
                        props={
                          {
                            textClassName: 'text-[18px] text-[#34B53A] font-semibold ',
                            bg: 'bg-[#E2FBD7]',
                            content: 'text-[#34B53A]',
                            borderWidth: 'border-4',
                            border: 'border-[#E2FBD7]'
                          }
                        } value={28} />
                    </div>
                  </div>
                </div>
              </BoxCantainer>
            </div>
          </div>
          <div className="lg:col-span-9 md:col-span-9 col-span-1 lg:pl-3 md:pl-2 pl-0">
            <div className="">
              <BoxCantainer>
                <Tab props={SiteSpeedProps} />
              </BoxCantainer>
            </div>
          </div>
        </div>

        <div className="">
          <div className="pl-2">
            <Label>Agents</Label>
          </div>
          <TopAgent />
        </div>
        <div className="">
          <Pagination />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Agents;


const BoxCantainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
border-radius: 10px;
padding:0px 15px 15px 15px;
`;

const AgentContainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
border-radius: 10px;
margin-top:10px;
margin-bottom:10px;
padding:5px 15px;
`;


const Label = styled.span`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 130%;
color: #1B263C;
`;

const AgentRevenueTxt = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 30px;
color: #2B4C9B;
`;

const AddBtn = styled.button`
color:white ;
width:35px;
height:35px;
display:grid;
border-radius:50%;
transition:all ease 0.3s; 
background: rgba( 228,226,226, 0.45 );
 backdrop-filter: blur(9px);
&:hover:hover{
  opacity:0.8;
} 
`;
const Img = styled.img`
height:70px;
width:70px;
border-radius:50%;
`;

const CustomeTxt = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 30px;
color: #1B263C;
`;
const CustomeLabel = styled.div`
// font-family: 'Open Sans';
// font-style: normal;
font-weight: 700;
font-size: 13px;
color: #4D5E80;
`;
const CustomeText = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #9295A3;
mix-blend-mode: normal;
`;