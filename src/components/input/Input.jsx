import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ label, value, onChange, type = "text" }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      variant="outlined"
      fullWidth
    />
  );
};

export default Input;
