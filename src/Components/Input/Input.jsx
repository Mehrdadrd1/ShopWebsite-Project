import { Box, TextField } from "@mui/material";
import Theme from "../Theme/Theme";
import "./Input.css";

const Input = ({
  placeholder,
  id,
  type,
  isvalid,
  invalidMessage,
  handleChange,
}) => {
  const theme = Theme();

  return (
    <div className="inputDiv">
      <input className="Input" id={id} placeholder={placeholder} type={type} />
    </div>
  );
};
export default Input;
