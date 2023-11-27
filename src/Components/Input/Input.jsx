import { ThemeProvider } from "@emotion/react";
import { TextField } from "@mui/material";
import Theme from "../Theme/Theme";

const Input = ({ label, id, type }) => {
  const theme = Theme();
  return (
    <ThemeProvider theme={Theme()}>
      <TextField
        className="input"
        variant="outlined"
        autoComplete="given-name"
        required
        id={id}
        label={label}
        type={type}
        autoFocus
        sx={{
          bgcolor: "backgroung.paper",
          margin: "10px",
          borderRadius: "12px",
        }}
      />
    </ThemeProvider>
  );
};
export default Input;
