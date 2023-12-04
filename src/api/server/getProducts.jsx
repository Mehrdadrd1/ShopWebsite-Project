import { useEffect, useState } from "react";
import "./getProducts.css";
import axios from "axios";
import LoadingSvg from "../../svg/LoadingSvg";
import ProductCard from "../ProductCard/ProductCard";

const getProducts = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState(null);
  const [getData, setGetData] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setGetData({ loading: true, data: null, error: false });
    axios
      .get(url)
      .then((response) => {
        setGetData({ loading: false, data: response.data, error: false });
        setproducts(response.data);
      })
      .catch(() => {
        setGetData({ loading: false, data: null, error: true });
      });
  }, [url]);

  let content = null;

  if (getData.error) {
    return <p>There Was an error please try again later</p>;
  }

  if (getData.loading) {
    return <LoadingSvg></LoadingSvg>;
  }

  if (getData.data) {
    return products;
  }
};

export default getProducts;
