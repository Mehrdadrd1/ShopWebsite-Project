import { Box } from "@mui/material";
import Layout from "../../Components/Layout/Layout";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";

const Register = () => {
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

export default Register;
