import React from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Layout from 'Component/Layout';
import { PrivateRouteList, PublicRouteList } from 'Routes/routes';
import './App.css';
import "antd/dist/antd.min.css";
import { AfterLoginHeader, Radio, CheckBox, Textfield } from 'Component';
import Login from "pages/Login/Login";
import { useAuth } from 'hooks';
const ProtectedRoutes = ({ user, RedirectLink = "/login" }) => {
  if (!user) {
    return <Navigate to={RedirectLink} replace />
  } else {
    <Outlet />
  }
}
const PrivateRoutes = ({ user, redirectionLink = "/profile" }) => {
  if (user) {
    return <Navigate to={redirectionLink} replace />
  } else {
    return <Outlet />
  }
}
function App() {
const {session} = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes user={session} />}>
            {
              PrivateRouteList?.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} {...route} />
              ))
            }
          </Route>
          <Route element={<PrivateRoutes user={session} />}>
            {
              PublicRouteList?.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} {...route} />
              ))
            }
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
