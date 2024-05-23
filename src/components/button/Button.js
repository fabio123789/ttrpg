import React from "react";
import { IconButton, Button as MUIButton } from "@mui/material";

const Button = ({
  children,
  color = "primary",
  variant = "contained",
  icon,
  ...props
}) => {
  if (icon) return <IconButton {...props}>{icon}</IconButton>;
  return (
    <MUIButton {...props} color={color} variant={variant}>
      {children}
    </MUIButton>
  );
};

export default Button;
