import NavBar from "../NavBar/NavBar";
import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Theme from "../Theme/Theme";

const Header = () => {
  return (
    <ThemeProvider theme={Theme()}>
      <Box
        sx={{
          display: "flex",
          padding: "5px",
          flexDirection: "column",
          bgcolor: "color.quaternary",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          React Shop Website
        </Typography>
        <NavBar />
      </Box>
    </ThemeProvider>
  );
};
export default Header;
