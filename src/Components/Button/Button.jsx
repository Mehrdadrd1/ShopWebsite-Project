import Button from "@mui/material/Button";

const Buttons = ({ onClick, children }) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Buttons;
