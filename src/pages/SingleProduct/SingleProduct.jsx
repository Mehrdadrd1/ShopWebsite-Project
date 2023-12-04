import Layout from "../../Components/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSvg from "../../svg/LoadingSvg";
import { useParams, Link } from "react-router-dom";
import Theme from "../../Components/Theme/Theme";
import "./SingleProduct.css";
import ProductView from "../../Components/ProductView/ProductView";
import Buttons from "../../Components/Button/Button";

const SingleProduct = () => {
  const { productId } = useParams();
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
    content = <p>There Was an error please try again later</p>;
  }

  if (getData.loading) {
    content = <LoadingSvg></LoadingSvg>;
  }

  if (getData.data) {
    let product = [];
    product = products[productId - 1];

    content = <ProductView product={product} />;
  }

  return (
    <Layout>
      <div className="singleCard">
        <h1>
          <Link
            style={{ color: Theme().palette.color.primary }}
            to={"/products"}
          >
            <Buttons>Back To Products</Buttons>
          </Link>
        </h1>
        <div className="SingleProduct">{content}</div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
