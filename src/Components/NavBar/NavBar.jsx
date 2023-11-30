import { Link } from "react-router-dom";
import "./NavBar.css";
import { Box } from "@mui/material";
import Theme from "../Theme/Theme";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const linkColor = Theme();
  const linkStyle = {
    textDecoration: "none",
    color: linkColor.palette.color.primary,
  };
  return (
    <Box sx={{ marginTop: "20px" }} className="NavBar">
      <Box className="NavBar-pages">
        <ul>
          <li>
            <Link style={linkStyle} to={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to={`/products`}>
              Products
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to={`/login`}>
              Log in
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to={`/register`}>
              Register
            </Link>
          </li>
        </ul>
      </Box>
      <Box className="NavBar-Card">
        <ul>
          <li>
            <Link style={linkStyle} to={`/card`}>
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default NavBar;
