import React from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: "none",
  borderRadius: "6px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "6px",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#F1C40F", // Custom label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#F1C40F", // Custom label color when focused
  },
  "& .MuiFormHelperText-root": {
    color: "#F1C40F", // Custom label color
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
}));

const CustomTextField = ({ ...props }) => {
  return <StyledTextField {...props} />;
};

export default CustomTextField;
