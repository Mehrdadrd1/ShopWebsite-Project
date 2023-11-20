import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-pages">
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/products`}>Products</Link>
          </li>
          <li>
            <Link to={`/login`}>Log in</Link>
          </li>
          <li>
            <Link to={`/register`}>Register</Link>
          </li>
        </ul>
      </div>
      <div className="NavBar-Card">
        <ul>
          <li>
            <Link to={`/card`}>Card</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
