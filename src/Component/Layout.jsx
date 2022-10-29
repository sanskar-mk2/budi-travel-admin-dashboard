import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AfterLoginHeader } from 'Component';
import { useAuth } from 'hooks';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
const Layout = () => {
  // const { session } = useAuth()
  const session = true;
  return (
    <React.Fragment>
      <Container>
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
      </Container>
    </React.Fragment>
  );
}

export default Layout;

const Container = styled.div`
background-color:#f6fbfe !important;
`;