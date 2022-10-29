import React from 'react';
import styled from 'styled-components';
import { ServiceCardData } from 'utils/ObjectUtils';
import { IconProvider } from 'utils/common.utils';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";
import { Tooltip } from 'antd';

const text = <span>prompt text</span>;
const DashboardChild = () => {
  const ServiceCard = React.memo((props) => {
    return (
      <React.Fragment>
        <CardOFService style={{ backgroundColor: props?.bgColor, boxShadow: props?.dropShadow }}>
          <div className="grid  grid-cols-6  ">
            <div className='col-span-5 '>
              <span className="text-white font-semibold">
                {props?.title}
              </span>
            </div>
            <div className=" col-span-1">
              <Tooltip placement="leftTop" color="black" title={
                <React.Fragment>
                  <button>Click </button>
                  <p className="cursor-pointer">lorem ipsum </p>
                </React.Fragment>} arrowPointAtCenter>
                <span>
                  <IconProvider className={`text-white text-lg float-right cursor-pointer `} color={`white `}>
                    <HiOutlineDotsHorizontal />
                  </IconProvider>
                </span>
              </Tooltip>
            </div>
          </div>
          <div>
            <section className="">
              <h1 className='py-5 text-white text-center  text-3xl font-semibold'>145</h1>
            </section>
            <div className="grid  grid-cols-5  ">
              <div className='col-span-1 '>
                <div className="float-left">
                  <AddBtn style={{ backgroundColor: props?.btnBgColor }}>
                    <IconProvider className={`text-white m-auto text-lg float-right cursor-pointer `} color={`white `}>
                      <BsPlusCircleFill />
                    </IconProvider>
                  </AddBtn>
                </div>
              </div>
              <div className='col-span-4 '>
                <div className="float-right">
                  <CustomeBtn style={{ backgroundColor: props?.btnBgColor }}>
                    {props?.btnText}
                  </CustomeBtn>
                </div>
              </div>

            </div>

          </div>
        </CardOFService>
      </React.Fragment>
    )
  }, []);
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-2  md:grid-cols-1 grid-cols-1 gap-3">
        <div className="">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 col-span-1 gap-4">
            {
              ServiceCardData?.map((props, index, array) => (
                <ServiceCard {...props} key={index} />
              ))
            }
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </React.Fragment>
  );
}

export default DashboardChild;



const CardOFService = styled.div`
height:160px;
border-radius:10px;
width:100%;
padding:15px;

`;
const CustomeBtn = styled.button`
height:30px;
border-radius:100px;
font-size:10px;
font-weight:700;
padding-left:15px;
padding-right:15px;
// font-family: 'Open Sans';
color: #FFFFFF;
`;

const AddBtn = styled.button`
color:white ;
width:30px;
height:30px;
display:grid;
border-radius:50%;
&&:hover 
`;