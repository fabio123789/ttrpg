import React from "react";
import { IconButton, Button as MUIButton, Tooltip } from "@mui/material";

const Button = ({
  children,
  color = "primary",
  variant = "contained",
  icon,
  tooltip,
  ...props
}) => {
  if (icon)
    return (
      <Tooltip title={tooltip}>
        <IconButton color={color} {...props}>
          {icon}
        </IconButton>
      </Tooltip>
    );
  return (
    <MUIButton {...props} color={color} variant={variant}>
      {children}
    </MUIButton>
  );
};

export default Button;
