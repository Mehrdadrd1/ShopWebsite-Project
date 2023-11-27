import { Box, ThemeProvider } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Theme from "../Theme/Theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme()}>
      <Box sx={{ height: "100%" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
