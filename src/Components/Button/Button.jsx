import Button from "@mui/material/Button";

const Buttons = ({ onClick, children, type, id, disabled, loading }) => {
  return (
    <Button
      type={type}
      id={id}
      disabled={disabled}
      className={children}
      variant="contained"
      onClick={onClick}
      sx={{
        textDecoration: "none",
        width: "fit-content",
        height: "fit-content",
        margin: "10px",
      }}
    >
      {children}
    </Button>
  );
};

export default Buttons;
