import React from "react";
import { Wrapper } from "Component";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";

const PublicRouteList = [
  {
    path: "/login",
    component: (<React.Suspense fallback={<p>Loading...</p>}>
      <Login />
    </React.Suspense>)
  },
  {
    path: "/forget-password",
    component: (<React.Suspense fallback={<p>Loading...</p>}>
      <Login />
    </React.Suspense>)
  },
  {
    path: "/otp-verifcation",
    component: (<React.Suspense fallback={<p>Loading...</p>}>
      <Login />
    </React.Suspense>)
  }
];
const PrivateRouteList = [
  {
    path: "/dashboard",
    component: (<Wrapper>
      <Dashboard />
    </Wrapper>)
  }, {
    path: '/customer',
    component: (<Wrapper>
      <Dashboard />
    </Wrapper>)
  }
];


export { PublicRouteList, PrivateRouteList };