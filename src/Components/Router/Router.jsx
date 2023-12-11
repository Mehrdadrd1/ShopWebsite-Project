import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Cart from "../../pages/Cart/Cart";
import SingleProduct from "../../pages/SingleProduct/SingleProduct";
const Pages = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:productId",
      element: <SingleProduct />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return router;
};

export default Pages;
