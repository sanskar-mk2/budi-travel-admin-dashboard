import React from 'react';
import {Sidebar  ,TopHeader} from "Component"
import styled from "styled-components";
import { SidebarContants } from 'constants/Sidebar.menu';
import {   ChildSubMenu} from 'Component/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
const AfterLoginHeader = () => {

  return (
    <React.Fragment>
      <TopHeader />
      <div className=" grid grid-cols-12 gap-2 lg:px-4 md:px-4 px-1">
        <div className="lg:col-span-2 md:col-span-3 col-span-12">
          <SideBarContainer>
            {
              SidebarContants?.map((i, index) => (
                <Sidebar props={i} key={index}>
                  <ChildSubMenu {...i?.child} />
                </Sidebar>
              ))
            }
          </SideBarContainer>
        </div>
        <div className="lg:col-span-10 md:col-span-9 col-span-10">
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
