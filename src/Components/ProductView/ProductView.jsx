import React from "react";
import "./ProductView.css";
import Button from "../Button/Button";

const ProductView = (props) => {
  return (
    <div className="SingleView" key={props.product.id}>
      <div className="ProductView">
        <div className="cardImage">
          <img src={props.product.image} alt="product" />
        </div>
        <div className="cardInfo">
          <div className="title">
            <h2>{props.product.title}</h2>
            <div className="category">
              <span>Category:</span> {props.product.category}
            </div>
            <div className="descrip">
              <p>{props.product.description}</p>
            </div>
          </div>
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
