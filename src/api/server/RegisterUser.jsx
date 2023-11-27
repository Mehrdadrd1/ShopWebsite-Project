import axios from "axios";

const RegisterUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/registered",
      userData
    );
    console.log("Registered User:", response);
    return response;
  } catch (error) {
    console.log("Error Response:", error);
  }
};

export default RegisterUser;
