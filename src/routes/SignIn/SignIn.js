import React, { useState } from "react";
import { Container, Typography, Box, Alert } from "@mui/material";
import { styled } from "@mui/system";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  maxWidth: "100vw !important",
  backgroundColor: theme.palette.background.default,
}));

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for actual authentication logic
    if (username === "user" && password === "pass") {
      console.log("Logged in");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <StyledContainer component="main">
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: 360,
          mt: 1,
        }}
        onSubmit={handleSubmit}
      >
        <Input
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
        <Input
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default SignIn;
