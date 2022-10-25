import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const Selector = ({
  control,
  ...props
}) => (
  <React.Fragment>
    <div className={``}>
      <Select
        defaultValue={props?.defaultOption}
        control={control}
        {...props}
        style={{
          width: props?.width,
        }}
      >
        {
          props?.option?.map((i, index) => (
            <Option value={i?.value} key={index}>{i?.value}</Option>
          ))
        }
      </Select>
      <p className=" px-2 mb-0 pt-1 text-xs text-error-color">{props?.error?.message}</p>
    </div>
  </React.Fragment>
);
export default Selector;