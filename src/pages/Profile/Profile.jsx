import React from 'react'
import styled from 'styled-components';
export default function Profile() {

    return (
        <div>
            <BoxCantainer>
                <div className='flex justify-between'>
                    <div>
                        abhijeet
                    </div>
                    <div>
                        abhijeet
                    </div>
                </div>
            </BoxCantainer>
        </div>
    )
}

const BoxCantainer = styled.div`
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
border-radius: 10px;
padding:15px 15px 15px 15px;
&& @media only screen and (max-width:760px){
  overflow-x:scroll; 
 }
 `;

const CustomeLabel = styled.div`
// font-family: ${props => props?.theme?.fontFamily ?? 'Open Sans'};
// font-style: ${props => props?.theme?.fontStyle ?? 'normal'};
font-weight: ${props=>props?.theme?.fontWeight??'700'};
font-size: ${props=>props?.theme.fontSize??'13px'};
color: ${props=>props?.theme?.color??'#4D5E80'};
`;