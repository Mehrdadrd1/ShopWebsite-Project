import "./Input.css";

const Input = ({
  placeholder,
  id,
  type,
  isvalid,
  invalidMessage,
  handleChange,
}) => {
  return (
    <div className="inputDiv">
      <input className="Input" id={id} placeholder={placeholder} type={type} />
    </div>
  );
};
export default Input;
