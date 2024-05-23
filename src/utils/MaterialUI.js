import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ffa000",
    },
    success: {
      main: "#388e3c",
    },
    info: {
      main: "#1976d2",
    },
  },
});
