import { Box, ThemeProvider } from "@mui/material";
import Layout from "../../Components/Layout/Layout";
import RegisterForm from "../../Container/RegisterForm/RegisterForm";
import Theme from "../../Components/Theme/Theme";

const RegisterPage = () => {
  return (
    <ThemeProvider theme={Theme()}>
      <Layout>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <RegisterForm />
        </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default RegisterPage;
