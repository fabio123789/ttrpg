import React, { useState } from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomButton from "../button/Button";
import CustomTextField from "../textField/TextField";

const FormContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#2C3E50", // Background color
  color: "#FDF3E7", // Text color
}));

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <FormContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <CustomTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          helperText="Incorrect entry."
        />
        <CustomTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton fullWidth variant="primary">
          Login
        </CustomButton>
      </Box>
    </FormContainer>
  );
};

export default LoginForm;
