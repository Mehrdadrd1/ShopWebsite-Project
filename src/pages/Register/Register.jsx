import Layout from "../../Components/Layout/Layout";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";
import "./Register.css";

const Register = () => {
  return (
    <Layout>
      <div className="registerPage">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default Register;
