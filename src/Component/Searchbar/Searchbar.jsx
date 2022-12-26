
import { AutoComplete, Input } from 'antd';
import React from 'react';
import styled from "styled-components"
const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);
const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        {count}
      </span>
    </div>
  ),
});
const options = [
  {
    label: renderTitle('Budi'),
    options: [renderItem('Budi', 10000), renderItem('Budi UI', 10600)],
  },
  {
    label: renderTitle('Budi'),
    options: [renderItem('Budi UI FAQ', 60100), renderItem('Budi FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('Budi  Admin', 100000)],
  },
];
export const SearchBar = () => (
  <CustomeSpan>
    <AutoComplete
      popupClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{
        width: "100%",
        overflow:"hidden",
        border: "none",
        boxShadow: "0px 2px 5px rgba(38, 51, 77, 0.03)"
      }}
      options={options}
    >
      <Input.Search bordered={false} size="large" style={{boxShadow:" 0px 2px 5px rgba(38, 51, 77, 0.03)" }} placeholder="Search" />
    </AutoComplete>
  </CustomeSpan>
);

const CustomeSpan = styled.div`
&&{
  border-radius:30px;
  overflow:hidden !important;
  background:#F6FBFE ;
  height:38px !important;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  button{
    border:none !important;
    border-radius:30px;
  
  }
:hover{
  border:none !important;
  ouline:none !important;
  
}
}
`;
