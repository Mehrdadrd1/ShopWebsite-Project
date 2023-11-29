import { Box, TextField } from "@mui/material";
import Theme from "../Theme/Theme";
import "./Input.css";

const Input = ({ label, id, type, isvalid, invalidMessage, handleChange }) => {
  const theme = Theme();
  //const [invalid, setInvalid] = useState(false);
  // const [invalidMessage, setInvalidMessage] = useState("");

  // const handleValidation = (e) => {
  //   if (type === "name") {
  //     if (e.target.value.length <= 3) {
  //       setInvalid(true);
  //       setInvalidMessage("Please At least Use 3 character");
  //     }
  //   }
  // };

  return (
    <Box className="Input" sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        className="input"
        variant="outlined"
        required
        id={id}
        label={label}
        type={type}
        autoFocus
        onChange={handleChange}
        sx={{
          margin: "10px",
          color: theme.palette.color.primary,
          borderColor: theme.palette.color.primary,
        }}
      />
      {!isvalid && <Box className="error">Invalid Input: {invalidMessage}</Box>}
    </Box>
  );
};
export default Input;
