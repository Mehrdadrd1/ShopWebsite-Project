import Buttons from "../../Components/Button/Button";
import Theme from "../../Components/Theme/Theme";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import CheckBox from "../../Components/CheckBox/CheckBox";
import LoginUser from "../../api/server/LoginUser";
import "./LoginForm.css";

const LoginForm = () => {
  const theme = Theme();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let id;
    const data = {
      id: id,
      firstName: event.target[0].value,
      LastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      rememer: event.target[5].checked,
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
        <div className="logControl">
          <CheckBox />
          <Buttons type="submit" id="submit">
            Submit
          </Buttons>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
