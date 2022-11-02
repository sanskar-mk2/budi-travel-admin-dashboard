import { Pagination } from 'antd';
import React from 'react';
import styled from "styled-components"

export const PaginationComponent = ({
  labelClassName,
  labelText,
  props
}) => {
  return (
    <React.Fragment>
      <div className="flex justify-between ">
        <div className={`  ${labelClassName}`}>
          <CustomeText>{labelText ?? 'Default text '}</CustomeText>
        </div>
        <div className=''>
          <Pagination
            {...props}
            showSizeChanger={props?.showSizeChanger ?? false}
            defaultCurrent={props?.defaultCurrent6}
            total={props?.total ?? 500}
          />
        </div>
      </div>
    </React.Fragment>
  )
}


const CustomeText = styled.div`
// font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
letter-spacing: -0.01em;
color: #9295A3;

`;