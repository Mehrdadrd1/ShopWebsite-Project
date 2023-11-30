import { useEffect, useState } from "react";
import "./BestSellers.css";
import Promise from "axios";
import axios from "axios";
import Svgs from "../../SVGs/Svgs";
import ProductCard from "../ProductCard/ProductCard";

const BestSellers = () => {
  const urls = [
    "https://fakestoreapi.com/products/4",
    "https://fakestoreapi.com/products/5",
    "https://fakestoreapi.com/products/13",
  ];
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .all(urls.map((url) => axios.get(url)))
      .then((response) => {
        setProducts({ loading: false, data: response, error: false });
      })
      .catch(() => {
        setProducts({ loading: false, data: null, error: true });
      });
  }, urls);

  let content = null;

  if (products.error) {
    content = <p>There Was an error please try again later</p>;
  }

  if (products.loading) {
    content = <Svgs></Svgs>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return <div className="BestSeller">{content}</div>;
};

export default BestSellers;
