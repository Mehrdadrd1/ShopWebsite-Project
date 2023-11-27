import { TextField } from "@mui/material";

const Input = ({ label, id, type }) => {
  return (
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
        margin: "10px",
      }}
    />
  );
};
export default Input;
