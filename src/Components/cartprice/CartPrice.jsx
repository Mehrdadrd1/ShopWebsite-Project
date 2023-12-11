import React from "react";
import { useSelector } from "react-redux";
import "./CartPrice.css";

const CartPrice = () => {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalQuantity, totalPrice };
  };

  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          Total: {getTotal().totalQuantity} items
          <br />
          <strong>Total Price: ${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
};

export default CartPrice;
