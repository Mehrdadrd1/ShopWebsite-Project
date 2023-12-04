import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css";
import LoadingSvg from "../../svg/LoadingSvg";

const Products = () => {
  const url = "https://fakestoreapi.com/products?limit=8";
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({ loading: true, data: null, error: false });
    axios
      .get(url)
      .then((response) => {
        setProducts({ loading: false, data: response.data, error: false });
      })
      .catch(() => {
        setProducts({ loading: false, data: null, error: true });
      });
  }, [url]);

  let content = null;

  if (products.error) {
    content = <p>There Was an error please try again later</p>;
  }

  if (products.loading) {
    content = <LoadingSvg></LoadingSvg>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div className="" key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <Layout>
      <div className="mainCard">
        <h1>Products</h1>
        <div className="Products">{content}</div>
      </div>
    </Layout>
  );
};

export default Products;
