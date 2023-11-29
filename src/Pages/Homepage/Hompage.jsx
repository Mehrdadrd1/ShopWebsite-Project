import Buttons from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Theme from "../../Components/Theme/Theme";

const HomePage = () => {
  const theme = Theme();
  const linkStyle = {
    textDecoration: "none",
    color: theme.palette.color.primary,
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.color.quaternary,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "30vh",
            mt: "5vh",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{
              mt: "30px",
              color: theme.palette.background.paper,
              fontWeight: "bold",
            }}
            variant="h3"
          >
            Hello To React Fake Shop
          </Typography>
          <Typography
            sx={{
              mt: "50px",
              color: theme.palette.background.paper,
              fontWeight: "bolder",
            }}
            variant="h5"
          >
            We here try to achieve our programing Goals
          </Typography>
        </Box>
        <Box sx={{ mt: "10vh" }}>
          <Buttons>
            <Link style={linkStyle} to={"/products"}>
              Start Buying...
            </Link>
          </Buttons>
        </Box>
      </Box>
    </Layout>
  );
};

export default HomePage;
