import {  Modal } from 'antd';
import React from "react";
const ModalComp = ({ state , SetState, title,  children , ...pops }) => {
  const handleOk = () => {
    SetState(false);
  };
  const handleCancel = () => {
    SetState(false);
  };

  return (
    <React.Fragment>
      <Modal {...pops} title={title} open={state} onOk={handleOk} onCancel={handleCancel}>
        {
          children
        }
      </Modal>
    </React.Fragment>
  );
};
export default ModalComp;