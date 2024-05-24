import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import Button from "../button/Button";

const Popup = ({
  open,
  handleClose,
  title,
  children,
  handleAction,
  actionText,
}) => {
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleAction} color="primary">
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
