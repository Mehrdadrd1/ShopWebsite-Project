import Buttons from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import LoginUser from "../../api/LoginUser";
import { Link } from "react-router-dom";
import Theme from "../../Components/Theme/Theme";
import "./LoginForm.css";
import CheckBox from "../../Components/CheckBox/CheckBox";

const LoginForm = () => {
  const linkColor = Theme();
  const linkStyle = {
    textDecoration: "none",
    color: linkColor.palette.color.primary,
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let id;
    const data = {
      id: id,
      email: event.target[0].value,
      password: event.target[1].value,
      rememer: event.target[2].checked,
    };

    const response = await LoginUser(data, id);
    console.log("Response:", response);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <div className="logForm">
        <h3>Login</h3>
        <div className="logUserData">
          <Input id="email" placeholder="Email" type="email" />
          <Input id="password" placeholder="Password" type="password" />
        </div>
        <div>
          <CheckBox />
        </div>
        <div className="logControl">
          <Buttons type="submit" id="submit">
            Login
          </Buttons>
          <Buttons type="signUp" id="signUp">
            <Link style={linkStyle} to={`/register`}>
              Sign uP
            </Link>
          </Buttons>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
