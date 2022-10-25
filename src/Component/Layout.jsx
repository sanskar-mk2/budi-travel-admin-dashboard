import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AfterLoginHeader } from 'Component';
import { useAuth } from 'hooks';
import { Outlet } from "react-router-dom";
const Layout = () => {
  const { session } = useAuth()
  return (
    <React.Fragment>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
          },
        }} />
      {
        session ? (<AfterLoginHeader />) : (<Outlet />)
      }
    </React.Fragment>
  );
}

export default Layout;
