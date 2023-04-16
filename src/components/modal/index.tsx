import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Typography } from '../typography';
import { useTheme } from 'styled-components';

interface CustomModalProps {
  title: string,
  msg: string,
  open: boolean;
  onOpen: (x: any) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, msg, open, onOpen }) => {
  
  const { color } = useTheme();
  const handleOk = () => {
    onOpen(false);
  };
  const handleCancel = () => {
    onOpen(false);
  };

  return (
    <>
      <Modal 
        className='payment-modal'
        title={title.toUpperCase()}
        open={open} 
        onOk={handleOk} 
        onCancel={handleCancel}
        centered
        style={{
          backgroundColor: color.bg[2]
      }}
      >
        <div className='flex justify-center items-center h-[100px]'>
          <Typography size={16}>{msg}</Typography>
        </div>
      </Modal>
    </>
  );
};

export default CustomModal;