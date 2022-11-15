import React from "react";
import { Wrapper } from "Component";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";
import Revenue from "pages/Revenue/Revenue";
import Agents from "pages/Agents/Agents";
import AgentDetails from "pages/Agents/AgentDetails";
import Users from "pages/User/Users";
import UserDetails from "pages/User/UserDetails";
import ForgetPassword from "pages/ForgetPassword/ForgetPassword";
import VerifyOtp from "pages/ForgetPassword/VerifyOtp";
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
      <ForgetPassword />
    </Wrapper>)
  },
  {
    path: "/otp-verifcation",
    component: (<Wrapper>
      <VerifyOtp />
    </Wrapper>)
  }
];
const PrivateRouteList = [
  {
    path: "/",
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