import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Theme from "../Theme/Theme";

const ProductCard = (props) => {
  return (
    <div className="Card" key={props.product.id}>
      <div className="productCard">
        <Link
          style={{ color: Theme().palette.color.primary }}
          to={`/products/${props.product.id}`}
        >
          <div className="cardImage">
            <img src={props.product.image} alt="product" />
          </div>
          <div className="cardInfo">
            <h2 className="title">
              <span>Category:</span> {props.product.category}
            </h2>
          </div>
        </Link>
      </div>

      <div className="cardControl">
        <p>$ {props.product.price}</p>
        <Button>ADD TO CARD</Button>
      </div>
    </div>
  );
};

export default ProductCard;
