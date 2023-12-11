import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Layout.css";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <main>
        <div className="shopping-cart" onClick={() => navigate("/cart")}>
          <FaShoppingCart id="cartIcon" />
          <p>{getTotalQuantity() || 0}</p>
        </div>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
