import Buttons from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import RegisterUser from "../../api/RegisterUser";
import { Link } from "react-router-dom";
import Theme from "../../Components/Theme/Theme";
import "./RegisterForm.css";

const RegisterForm = () => {
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
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      rememer: event.target[4].checked,
    };

    const response = await RegisterUser(data, id);
    console.log("Response:", response);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <div className="regForm">
        <h3>Sign Up</h3>
        <div className="regUserData">
          <Input id="firstName" placeholder="Full Name" type="name" />
          <Input id="email" placeholder="Email" type="email" />
          <Input id="password" placeholder="Password" type="password" />
        </div>
        <div className="regControl">
          <Buttons type="submit" id="submit">
            <Link style={linkStyle} to={"/login"}>
              Login
            </Link>
          </Buttons>
          <Buttons type="submit" id="submit">
            Sign Up
          </Buttons>
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
