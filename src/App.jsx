import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlayerPage from "./pages/PlayerPage";
import DMPage from "./pages/DMPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();
  return user ? <Component /> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/player"
              element={<PrivateRoute element={PlayerPage} />}
            />
            <Route path="/dm" element={<PrivateRoute element={DMPage} />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
