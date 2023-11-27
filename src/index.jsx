import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { ThemeProvider } from "@mui/system";
import Theme from "../src/Components/Theme/Theme";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme()}>
      <Box
        sx={{
          bgcolor: "background.paper",
          color: "color.primary",
        }}
      >
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
