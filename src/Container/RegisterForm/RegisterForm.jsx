import Buttons from "../../Components/Button/Button";
import Theme from "../../Components/Theme/Theme";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import CheckBox from "../../Components/CheckBox/CheckBox";
import RegisterUser from "../../api/server/RegisterUser";
import { Box } from "@mui/material";
import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: {
      value: "",
      validation: {
        required: true,
        minLength: 3,
      },
      invalidMessage: "",
      valid: false,
    },
  });

  const theme = Theme();
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (event) => {
    const [id, value] = event;
    setFormData({
      ...formData,
      [id]: {
        ...formData[id],
        value,
      },
    });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
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

    setLoading(false);
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "50VW",
          margin: "20px",
          borderRadius: "6px",
          bgcolor: theme.palette.color.quaternary,
        }}
      >
        <Input
          handleChange={handleChangeInput}
          isvalid={formData.name.valid}
          invalidMessage={formData.name.invalidMessage}
          id="firstName"
          label="First Name"
          type="name"
        />
        <Input id="lastName" label="Last Name" type="name" />

        <Input id="email" label="Email" type="email" />
        <Input id="password" label="Password" type="password" />
        <Input id="password2" label="Confirm Password" type="password" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <CheckBox />
          <Buttons type="submit" id="submit" loading={loading}>
            Submit
          </Buttons>
        </Box>
      </Box>
    </Form>
  );
};

export default RegisterForm;
