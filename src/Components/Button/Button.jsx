import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/system";
import Theme from "../Theme/Theme";

const Buttons = ({ onClick, children, type, id, disabled }) => {
  return (
    <ThemeProvider theme={Theme()}>
      <Button
        type={type}
        id={id}
        disabled={disabled}
        className="Button"
        variant="contained"
        onClick={onClick}
        sx={{
          textDecoration: "none",
          bgcolor: "color.primary",
          ":hover": { bgcolor: "color.scondary" },
          width: "fit-content",
        }}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

export default Buttons;
