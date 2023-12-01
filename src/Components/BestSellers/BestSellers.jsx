import { useEffect, useState } from "react";
import "./BestSellers.css";
import axios from "axios";
import Svgs from "../../SVGs/Svgs";
import ProductCard from "../ProductCard/ProductCard";

const BestSellers = () => {
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
  let newList = null;

  if (getData.error) {
    content = <p>There Was an error please try again later</p>;
  }

  if (getData.loading) {
    content = <Svgs></Svgs>;
  }

  if (getData.data) {
    let threeBestPproducts = [];
    threeBestPproducts.push(products[6]);
    threeBestPproducts.push(products[8]);
    threeBestPproducts.push(products[12]);

    content = threeBestPproducts.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return <div className="BestSeller">{content}</div>;
};

export default BestSellers;
