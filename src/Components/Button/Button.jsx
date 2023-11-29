import Button from "@mui/material/Button";

const Buttons = ({ onClick, children, type, id, disabled, loading }) => {
  return (
    <Button
      type={type}
      id={id}
      disabled={disabled}
      className={`Button ${loading ? "ButtonLoading" : ""}`}
      variant="contained"
      onClick={onClick}
      sx={{
        textDecoration: "none",
        width: "fit-content",
        margin: "10px",
      }}
    >
      {loading && <div className="loading">Loading...</div>}
      {!loading && children}
    </Button>
  );
};

export default Buttons;
