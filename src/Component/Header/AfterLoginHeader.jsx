import React from 'react';
import TopHeader from './TopHeader';
import Sidebar from '../Sidebar/Sidebar';
import styled from "styled-components";
import { SidebarContants } from '../../constants/Sidebar.menu';
import { ChildSubAgent } from '../Sidebar/Sidebar';
const AfterLoginHeader = () => {

  return (
    <React.Fragment>
      <TopHeader />
      <div className='lg:px-2 md:px-2 px-0 grid grid-cols-12'>
        <div className="col-span-2">
          <SideBarContainer>
            {
              SidebarContants.map((i, index) => (
                <Sidebar props={i} key={index}>
                 <ChildSubAgent/>
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
