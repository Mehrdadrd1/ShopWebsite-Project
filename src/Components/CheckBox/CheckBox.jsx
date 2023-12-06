import "./CheckBox.css";
const CheckBox = () => {
  return (
    <div className="Checkbox">
      <label htmlFor="rememberMe">Remember ME</label>
      <input className="CheckboxInput" name="rememberMe" type="checkbox" />
    </div>
  );
};

export default CheckBox;
