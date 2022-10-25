import React from "react";
import Login from "pages/Login/Login";

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
    path: "/",
    component: (<React.Suspense fallback={<p>Loading...</p>}>
      <h1>Lorem iprem </h1>
    </React.Suspense>)
  }
];


export { PublicRouteList, PrivateRouteList };