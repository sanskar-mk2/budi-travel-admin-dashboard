import React from 'react';
import { Drawer, Button, Space } from "antd"
import { Sidebar, TopHeader } from "Component"
import styled from "styled-components";
import { SidebarContants, AgentRemainSideConstant } from 'constants/Sidebar.menu';
import { ChildSubMenu, ChildSubAgent } from 'Component/Sidebar/Sidebar';
import { IconProvider } from 'utils/common.utils';
import { Outlet } from 'react-router-dom';
import { useFetch } from 'hooks';
import { BsPeopleFill } from "react-icons/bs";
import { FaTimes } from 'react-icons/fa';
import { useAuth } from 'hooks';
const AfterLoginHeader = () => {
  const { session, logout } = useAuth()
  const [sideMenu, SetMenu] = React.useState(false);
  const onClose = () => {
    SetMenu(false);
  };
  const onSuccess = React.useCallback((response) => {

  }, []);
  const onFailure = React.useCallback((response) => {

  }, [])
  const { isLoading, data } = useFetch({
    initialUrl: "/agents",
    skipOnStart: false,
    onFailure,
    onSuccess
  });
  const agents = React.useMemo(() => {
    if (!isLoading) {
      return data?.agents?.map((i, index) => ({
        img: undefined,
        isLive: 'Live',
        name: i?.name,
        link: `/agent/${i?.id}`,
        id: i.id,
      }));
    }
  }, [isLoading, data?.agents]);
  console.log(agents, "it is your name ")
  const AgentUser = [
    {
      link: '/agents',
      key: '',
      title: 'Agents',
      permissionKey: '',
      tag: null,
      notification: 12,
      IconColor: '#FFCB33',
      icon: <BsPeopleFill />,
      child: agents,
    },
    ...AgentRemainSideConstant
  ]


  return (
    <React.Fragment>
      <div className="lg:block md:block hidden">
        <TopHeader />
        <div className=" grid grid-cols-12 gap-2 lg:px-4 md:px-4 px-1">
          <div className="lg:col-span-2 md:col-span-3 col-span-12">
            <div className="">
              <SideBarContainer>
                {
                  SidebarContants?.map((i, index) => (
                    <Sidebar props={i} key={index}>
                      {
                        i?.child?.map((i, index) => (
                          <ChildSubMenu key={index} props={i} />
                        ))
                      }
                    </Sidebar>
                  ))
                }
              </SideBarContainer>
            </div>
            <div className="mt-3">
              <SideBarContainer>
                {
                  AgentUser?.map((i, index) => (
                    <Sidebar props={i} key={index}>
                      {
                        i?.child?.map((i, index) => (
                          <ChildSubAgent key={index} props={i} />
                        ))
                      }
                    </Sidebar>
                  ))
                }
              </SideBarContainer>
            </div>
          </div>
          <div className="lg:col-span-10 md:col-span-9 col-span-10">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden block">
        <TopHeader SetMenu={SetMenu} sideMenu={sideMenu}>
          <Drawer
            placement="left"
            title={<button>BUDI</button>}
            size={'230'}
            onClose={onClose}
            closable={false}
            open={sideMenu}
            extra={
              <Space>
                {session && (<Button onClick={() => logout()}>Logout</Button>)}
                <div onClick={onClose}>
                  <IconProvider className={` text-lg float-right cursor-pointer `} color={`#000000`}>
                    <FaTimes />
                  </IconProvider>
                </div>
              </Space>
            }
          >
            <div className="sidebar ">
              <div className="">
                <SideBarContainer>
                  {
                    SidebarContants?.slice(0 , 3).map((i, index) => (
                      <Sidebar props={i} SetMenu={SetMenu} key={index}>
                        {
                          i?.child?.map((i, index) => (
                            <ChildSubMenu SetMenu={SetMenu} key={index} props={i} />
                          ))
                        }
                      </Sidebar>
                    ))
                  }
                </SideBarContainer>
              </div>
              <div className="mt-3">
                <SideBarContainer>
                  {
                    AgentUser?.map((i, index) => (
                      <Sidebar SetMenu={SetMenu} props={i} key={index}>
                        {
                          i?.child?.map((i, index) => (
                            <ChildSubAgent SetMenu={SetMenu} key={index} props={i} />
                          ))
                        }
                      </Sidebar>
                    ))
                  }
                </SideBarContainer>
              </div>
            </div>
          </Drawer>
          <div className="mt-[65px]">
            <Outlet />
            <br />
            <br />
            <br />
          </div>
        </TopHeader>
      </div>
    </React.Fragment>
  );
}

export default AfterLoginHeader;

const SideBarContainer = styled.div`
background:#fff;
border-radius:10px;
padding:6px;
border:1px solid #c5d5e2;

`;
