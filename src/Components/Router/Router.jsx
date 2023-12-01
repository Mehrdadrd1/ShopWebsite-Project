import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/Homepage/Homepage";
import ProductsPage from "../../Pages/ProductsPage/ProductsPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";
import CardPage from "../../Pages/CardPage/CardPage";
import ProductView from "../ProductView/ProductView";

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/card",
      element: <CardPage />,
    },
    {
      path: "/products/product-view",
      element: <ProductView />,
    },
  ]);

  return router;
};

export default Pages;
