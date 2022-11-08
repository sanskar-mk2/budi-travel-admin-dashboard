import React from "react";
import { Wrapper } from "Component";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";
import Revenue from "pages/Revenue/Revenue";
import Agents from "pages/Agents/Agents";
import AgentDetails from "pages/Agents/AgentDetails";
import Users from "pages/User/Users";
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
      <Revenue />
    </Wrapper>)
  }
  ,
  {
    path: '/agents',
    component: (<Wrapper>
      <Agents />
    </Wrapper>)
  },
  {
    path: '/agent/:id',
    component: (<Wrapper>
      <AgentDetails />
    </Wrapper>)
  }
  ,
  {
    path: '/users',
    component: (<Wrapper>
      <Users />
    </Wrapper>)
  },
  {
    path: '/user/:id',
    component: (<Wrapper>
      <UserDetails />
    </Wrapper>)
  }
];


export { PublicRouteList, PrivateRouteList };