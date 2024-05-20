import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/system";

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#F1C40F",
  color: "#2C3E50",
  "&:hover": {
    backgroundColor: "#D4AC0D",
  },
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#95A5A6",
  color: "#2C3E50",
  "&:hover": {
    backgroundColor: "#7F8C8D",
  },
}));

const DisabledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ECF0F1",
  color: "#BDC3C7",
}));

const CustomButton = ({ variant, children, tooltip, ...props }) => {
  if (variant === "primary") {
    return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
  if (variant === "secondary") {
    return <SecondaryButton {...props}>{children}</SecondaryButton>;
  }
  if (variant === "icon") {
    return (
      <Tooltip title={tooltip}>
        <IconButton color="inherit" {...props}>
          {children}
        </IconButton>
      </Tooltip>
    );
  }
  return (
    <DisabledButton disabled {...props}>
      {children}
    </DisabledButton>
  );
};

export const LogoutButton = ({ onLogout = function () {} }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <Tooltip title="Logout">
      <IconButton color="inherit" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
};

export default CustomButton;
