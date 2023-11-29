import { Box } from "@mui/material";
import Layout from "../../Components/Layout/Layout";
import RegisterForm from "../../Container/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <RegisterForm />
      </Box>
    </Layout>
  );
};

export default RegisterPage;
