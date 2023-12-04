import NavBar from "../NavBar/NavBar";
import { Typography } from "@mui/material";
import Theme from "../Theme/Theme";
import "./Header.css";

const Header = () => {
  const theme = Theme();
  return (
    <div
      className="Header"
      style={{
        backgroundColor: theme.palette.color.scondary,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        React Shop Website
      </Typography>
      <NavBar />
    </div>
  );
};
export default Header;
