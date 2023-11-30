import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";
import Svgs from "../../SVGs/Svgs";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ProductsPage.css";

const ProductsPage = () => {
  const url = "https://fakestoreapi.com/products";
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
    content = <Svgs></Svgs>;
  }

  if (products.data) {
    content = products.data.map((product, key) => (
      <ProductCard product={product} />
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

export default ProductsPage;
