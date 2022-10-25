import React from 'react';
import {Sidebar  ,TopHeader} from "Component"
import styled from "styled-components";
import { SidebarContants } from 'constants/Sidebar.menu';
import { ChildSubAgent } from 'Component/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
const AfterLoginHeader = () => {

  return (
    <React.Fragment>
      <TopHeader />
      <div className="lg:px-2 md:px-2 px-0 grid grid-cols-12 gap-2">
        <div className="lg:col-span-2 md:col-span-3 col-12">
          <SideBarContainer>
            {
              SidebarContants?.map((i, index) => (
                <Sidebar props={i} key={index}>
                  <ChildSubAgent />
                </Sidebar>
              ))
            }
          </SideBarContainer>
        </div>
        <div className="lg:col-span-10 md:col-span-9 col-12">
          <Outlet />
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
