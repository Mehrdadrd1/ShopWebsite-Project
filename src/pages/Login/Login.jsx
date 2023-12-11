import Layout from "../../Components/Layout/Layout";
import LoginForm from "../../containers/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Layout>
        <div className="loginPage">
          <LoginForm />
        </div>
      </Layout>
    </div>
  );
};

export default Login;
