import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AfterLoginHeader } from 'Component';
import { useAuth } from 'hooks';
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import { ConfigProvider } from 'antd';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Layout = () => {
  const { session } = useAuth()
  // const session =true ;
  return (
    <React.Fragment>
      <ConfigProvider theme={{
        token:''
      }}>
      <Container>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }} />
        {
          session ? (<AfterLoginHeader />) : (<Outlet />)
        }
      </Container>
      </ConfigProvider>
    </React.Fragment>
  );
}

export default Layout;

const Container = styled.div`
background-color:#f6fbfe !important;
`