import React from "react";
import { Wrapper } from "Component";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";
import DashboardRevenue from "pages/Dashboard/DashboardRevenue";
import Agents from "pages/Agents/Agents";
import AgentDetails from "pages/Agents/AgentDetails";
import UserDetails from "pages/User/UserDetails";

const PublicRouteList = [
  {
    path: "/login",
    component: (<Wrapper>
      <Login />
    </Wrapper>)
  },
  {
    path: "/forget-password",
    component: (<Wrapper>
      <Login />
    </Wrapper>)
  },
  {
    path: "/otp-verifcation",
    component: (<Wrapper>
      <Login />
    </Wrapper>)
  }
];
const PrivateRouteList = [
  {
    path: "/dashboard",
    component: (<Wrapper>
      <Dashboard />
    </Wrapper>)
  }, {
    path: '/dashboard-revenue',
    component: (<Wrapper>
      <DashboardRevenue />
    </Wrapper>)
  }
  , {
    path: '/agents',
    component: (<Wrapper>
      <AgentDetails />
    </Wrapper>)
  }
  ,
  {
    path: '/user',
    component: (<Wrapper>
      <UserDetails />
    </Wrapper>)
  }
];


export { PublicRouteList, PrivateRouteList };