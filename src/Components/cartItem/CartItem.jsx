import "./CartItem.css";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";

const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItem__incrDec">
          <Button onClick={() => dispatch(decrementQuantity(id))}>-</Button>
          <p>{quantity}</p>
          <Button onClick={() => dispatch(incrementQuantity(id))}>+</Button>
        </div>
        <Button
          className="cartItem__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
