import Buttons from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import CheckBox from "../../Components/CheckBox/CheckBox";
import RegisterUser from "../../api/server/RegisterUser";
import "./RegisterForm.css";

const RegisterForm = () => {
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

    const response = await RegisterUser(data, id);
    console.log("Response:", response);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <div className="regForm">
        <h3>Register</h3>
        <div className="regUserData">
          <Input id="firstName" placeholder="First Name" type="name" />
          <Input id="lastName" placeholder="Last Name" type="name" />

          <Input id="email" placeholder="Email" type="email" />
          <Input id="password" placeholder="Password" type="password" />
        </div>
        <div className="regControl">
          <CheckBox />
          <Buttons type="submit" id="submit">
            Submit
          </Buttons>
        </div>
      </div>
    </Form>
  );
};

export default RegisterForm;
