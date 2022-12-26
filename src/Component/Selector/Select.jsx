import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const Selector = ({
  control,
  options,
  setState,
  defaultOption,
  width,
  name,
  error,
  ...props
}) => {

  const updateState = React.useCallback((e) => {
    setState(e);
  }, [setState]);

  if (name) {
    return (
      <React.Fragment>
        <div className={`w-full`}>
          <Select
            value={defaultOption}
            {...props}
            style={{
              width: width
            }}
          >
            {
              options?.map((i, index) => (
                <Option value={i} key={index}>{i}</Option>
              ))
            }
          </Select>
          <p className=" px-2 mb-0 pt-1 text-xs text-error-color">{error?.message}</p>
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <Select
          defaultValue={defaultOption}
          onChange={updateState}
          style={{
            width: width
          }}
          {...props}
        >
          {
            options?.map((i, index) => (
              <Option value={i} key={index}>{i}</Option>
            ))
          }
        </Select>
      </React.Fragment>
    )
  }
}




export default Selector;