import Buttons from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../Components/Theme/Theme";

const HomePage = () => {
  const linkColor = Theme();
  const linkStyle = {
    textDecoration: "none",
    color: linkColor.palette.background.paper,
  };

  return (
    <Layout>
      <ThemeProvider theme={Theme()}>
        <Box
          sx={{
            minHeight: "75vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "color.quaternary",
            color: "color.primary",
          }}
        >
          <Typography sx={{ mt: "30px" }} variant="h3">
            Hello To React Fake Shop{" "}
          </Typography>
          <Typography sx={{ mt: "50px" }} variant="body">
            <strong>We here try to achieve our programing Goals</strong>
          </Typography>
          <Box sx={{ mt: "20vh" }}>
            <Buttons>
              <Link style={linkStyle} to={"/products"}>
                Start Buying...
              </Link>
            </Buttons>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
};

export default HomePage;
