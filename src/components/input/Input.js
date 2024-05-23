import { MenuItem, TextField } from "@mui/material";
import React from "react";

const Input = ({ label, options = [], ...props }) => {
  return (
    <TextField label={label} variant="outlined" {...props}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Input;
