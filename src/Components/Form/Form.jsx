import { FormControl, ThemeProvider } from "@mui/material";
import Theme from "../Theme/Theme";

const Form = ({ children, handleSubmit }) => {
  return (
    <FormControl
      onSubmit={handleSubmit}
      sx={{
        padding: "15px",
        margin: "10px",
      }}
    >
      {children}
    </FormControl>
  );
};

export default Form;
