import React from "react";
import { Wrapper } from "Component";
import Login from "pages/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";
import DashboardRevenue from "pages/Dashboard/DashboardRevenue";

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
    path: '/dashboard-revenue',
    component: (<Wrapper>
      <DashboardRevenue />
    </Wrapper>)
  }
];


export { PublicRouteList, PrivateRouteList };