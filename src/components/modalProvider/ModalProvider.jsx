import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ModalProvider = ({ children, open, handleClose, style }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalProvider;
