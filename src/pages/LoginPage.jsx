import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  styled,
} from "@mui/material";
import Input from "../components/input/Input";
import Popup from "../components/popup/Popup";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundImage: "url(/path/to/your/background-image.jpg)", // Add your background image path here
  backgroundSize: "cover",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: "100%",
  textAlign: "center",
}));

const StyledFormControl = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    if (username && password) {
      const role = await login(username, password);
      if (role === "dm") {
        navigate("/dm");
      } else if (role === "player") {
        navigate("/player");
      }
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" gutterBottom>
          TTRPG Login
        </Typography>
        <StyledFormControl>
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </StyledFormControl>
        <StyledFormControl>
          <Input
            label="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledFormControl>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Popup
          open={open}
          handleClose={handleClose}
          title="Login Error"
          content="Please enter both username and password."
          actions={[{ label: "Close", onClick: handleClose, color: "primary" }]}
        />
      </StyledPaper>
    </StyledContainer>
  );
};

export default LoginPage;
