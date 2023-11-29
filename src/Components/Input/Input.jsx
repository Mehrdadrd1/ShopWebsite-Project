import { TextField } from "@mui/material";
import Theme from "../Theme/Theme";
const Input = ({ label, id, type }) => {
  const theme = Theme();
  return (
    <TextField
      className="input"
      variant="outlined"
      required
      id={id}
      label={label}
      type={type}
      autoFocus
      sx={{
        margin: "10px",
        color: theme.palette.color.primary,
        borderColor: theme.palette.color.primary,
      }}
    />
  );
};
export default Input;
