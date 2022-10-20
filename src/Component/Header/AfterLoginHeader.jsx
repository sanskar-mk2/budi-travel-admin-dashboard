import React from 'react';
import TopHeader from './TopHeader';
import Sidebar from '../Sidebar/Sidebar';
import styled from "styled-components";
const AfterLoginHeader = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <div className='lg:px-2 md:px-2 px-0 grid grid-cols-12'>
        <div className="col-span-2">
          <SideBarContainer>
         {
          Array(10).fill().map((_ , i)=>(
            <Sidebar >
              <div>lorem ispum how are you tell me about your name rhe </div>
              </Sidebar>
          ))
         }
          </SideBarContainer>
        </div>
        <div className="col-span-10">

        </div>
      </div>

    </React.Fragment>
  );
}

export default AfterLoginHeader;

const SideBarContainer = styled.div`
background:#fff;
border-radius:10px;
padding:6px;
border:1px solid #c5d5e2;

`;