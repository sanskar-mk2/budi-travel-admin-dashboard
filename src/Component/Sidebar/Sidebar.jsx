import React from 'react';
// testing 
import styled from "styled-components";
import { RiDashboardFill } from 'react-icons/ri'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IconContext } from "react-icons";
const Sidebar = ({
  children
}) => {
  const [toggle, SetToggle] = React.useState(false);
  return (
    <React.Fragment>
      <div className='lg:w-full md:w-[15%] my-[10px] '>
        <div className={` flex justify-between transition-opacity hover:bg-primary-color bg-white px-2  py-3 rounded-md`}>
          <div className=''>
            <IconContext.Provider value={{ color: "white", className: " m-auto text-[23px]  font-semibold " }}>
              <RiDashboardFill />
            </IconContext.Provider>
          </div>
          <div className='text-white font-semibold'>
            Dashboard
          </div>
          <div className=' '>
            {
              true ? (<NewTag>NEW</NewTag>) : (
                <NotificationNum>90</NotificationNum>
              )
            }

          </div>
          <div className=''>
            <ToggleBtn onClick={() => SetToggle(!toggle)}>
              <IconContext.Provider value={{ color: "black", className: "mt-1 m-auto h-full text-[15px] font-semibold " }}>
                <div>
                  {
                    toggle ? (<BsChevronDown />) : (<BsChevronUp />)
                  }
                </div>
              </IconContext.Provider>
            </ToggleBtn>
          </div>
        </div>
        
       <div className={` overflow-hidden transition-all duration-700 ${toggle?'h-auto':'h-[0px]'}`}>{children}</div>
        
      </div>
    </React.Fragment>
  );
}

export default Sidebar;

const ToggleBtn = styled.div`
width:25px;
height:25px;
border-radius:50%;
display:grid;
cursor:pointer;
background:white;

`;

const NotificationNum = styled.div`
width:25px;
text-align:center;
height:25px;
border-radius:50%;
display:grid;
cursor:pointer;
background:pink;
font-size:13px;
padding-top:1px;

`;
const NewTag = styled.div`

background:#219653;
text-align:center;
border-radius:5px;
display:grid;
padding-left:3.5px;
padding-bottom:2px;
margin-top:1px;
padding-right:3.5px;
cursor:pointer;
color:white;
font-weight:medium;
font-size:13px;
`;