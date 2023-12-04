import React from "react";
import "./ProductView.css";
import Button from "../Button/Button";

const ProductView = (props) => {
  return (
    <div className="Card" key={props.product.id}>
      <div className="ProductView">
        <div className="cardImage">
          <img src={props.product.image} alt="product" />
        </div>
        <div className="cardInfo">
          <h2 className="title">
            <div>{props.product.title}</div>
            <span>Category:</span> {props.product.category}
            <div>{props.product.description}</div>
          </h2>
        </div>
      </div>
      <div className="cardControl">
        <p>$ {props.product.price}</p>
        <Button>ADD TO CARD</Button>
      </div>
    </div>
  );
};

export default ProductView;
