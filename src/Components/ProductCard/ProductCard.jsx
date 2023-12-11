import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductCard.css";
import Theme from "../Theme/Theme";

const ProductCard = (props, id, image, title, price) => {
  const dispatch = useDispatch();
  const product = props.product;

  return (
    <div className="Card" key={product.id}>
      <div className="productCard">
        <Link
          style={{ color: Theme().palette.color.primary }}
          to={`/products/${product.id}`}
        >
          <div className="cardImage">
            <img src={product.image} alt="product" />
          </div>
          <div className="cardInfo">
            <h2 className="title">
              <span>Category:</span> {product.category}
            </h2>
          </div>
        </Link>
      </div>

      <div className="cardControl">
        <p>$ {product.price}</p>
        <Button onClick={() => dispatch(addToCart(product))}>
          ADD TO CARD
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
