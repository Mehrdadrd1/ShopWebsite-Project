import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <Link to={`/products/${props.product.id}`}>
        <div className="cardImage">
          <img src={props.product.image} alt="product" />
        </div>
      </Link>
      <div className="cardInfo">
        <h3 className="title">{props.product.title}</h3>
        <div className="Price">$ {props.product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
