import Theme from "../Theme/Theme";
import "./CheckBox.css";
const CheckBox = () => {
  const theme = Theme();

  return (
    <div className="Checkbox">
      <label htmlFor="rememberMe">Remember ME</label>
      <input className="CheckboxInput" name="rememberMe" type="checkbox" />
    </div>
  );
};

export default CheckBox;
