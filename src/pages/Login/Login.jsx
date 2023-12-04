import Layout from "../../Components/Layout/Layout";
import LoginForm from "../../containers/LoginForm/LoginForm";
const Login = () => {
  return (
    <div className="Login">
      <Layout>
        <div>
          <LoginForm />
        </div>
      </Layout>
    </div>
  );
};

export default Login;
