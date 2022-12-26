import { Modal } from 'antd';
import React from "react";
const ModalComp = ({ onSubmit, state, SetState, title, children, ...pops }) => {
  const handleOk = () => {
    SetState(false);
    if (onSubmit) {
      onSubmit()
    }
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