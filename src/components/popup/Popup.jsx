import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const Popup = ({ open, handleClose, title, content, actions }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions.map((action, index) => (
          <Button key={index} onClick={action.onClick} color={action.color}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
