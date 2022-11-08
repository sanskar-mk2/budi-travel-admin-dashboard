import React from 'react';
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IconProvider , ImgProvider} from 'utils/common.utils';
// import { Pagination } from 'Component';
import { useFetch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';
const TopAgents = ({ props }) => {
const navigate = useNavigate()
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


  return (
    <React.Fragment>
      {
        isLoading ? (<Skeleton className="mt-3" active />) : (
          <React.Fragment>
            <div className="">
              <div className="pl-2">
                <Label>Top Agents</Label>
              </div>
              {
                data?.agents?.map((agent, index) => (
                  <AgentContainer key={index.toString()}>
                    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
                      <div>
                        <div className="flex items-center ">
                          <div className="">
                            <Img src={ImgProvider(agent?.profile?.profile_picture)} alt="loading... " />
                          </div>
                          <div className="pl-2">
                            <CustomeTxt>{agent?.name.split(" ")[0]}</CustomeTxt>
                            <CustomeText>{agent?.name.split(" ")[1]}</CustomeText>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="grid grid-cols-2 lg:pt-3 md:pt-3">
                          <div className='float-left text-center'>
                            <CustomeTxt>789 </CustomeTxt>
                            <CustomeText>Lima</CustomeText>
                          </div>
                          <div className='float-right  text-center'>
                            <CustomeTxt>489</CustomeTxt>
                            <CustomeText>Lima</CustomeText>
                          </div>
                        </div>
                      </div>
                      <div className="lg:inline md:inline grid ">
                        <div className="lg:m-0 md:m-0 m-auto">
                          <div className="flex lg:float-right md:float-right float-none pr-3 lg:pt-2 md:pt-2 lg:pb-0 md:pb-0 pb-2 ">
                            <div className=''>
                              <AgentRevenueTxt>$4,089</AgentRevenueTxt>
                              <CustomeText>Lima</CustomeText>
                            </div>
                            <div className="grid mt-3 ml-3 ">
                              <div className="auto l">
                                <AddBtn onClick={()=>navigate(`/agent/${agent?.id}`)}>
                                  <IconProvider className={`text-white m-auto text-lg float-right cursor-pointer `} color={`#1B263C`}>
                                    <IoIosArrowForward />
                                  </IconProvider>
                                </AddBtn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AgentContainer>
                ))
              }

            </div>
            <div className="mb-3">
              {/* <Pagination /> */}
            </div>
          </React.Fragment>
        )
      }
    </React.Fragment>
  );
}

export default TopAgents;

const AgentRevenueTxt = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 30px;
color: #2B4C9B;
`;

const AddBtn = styled.button`
color:white ;
width:35px;
height:35px;
display:grid;
border-radius:50%;
transition:all ease 0.3s; 
background: rgba( 228,226,226, 0.45 );
 backdrop-filter: blur(9px);
&:hover:hover{
  opacity:0.8;
} 
`;
const Img = styled.img`
height:60px;
width:60px;
border-radius:50%;
`;

const CustomeTxt = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 30px;
color: #1B263C;
`;
const CustomeText = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #9295A3;
mix-blend-mode: normal;
`;
const AgentContainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
border-radius: 10px;
margin-top:10px;
margin-bottom:10px;
padding:5px 15px;
`;
const Label = styled.span`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 130%;
color: #1B263C;
`;
