import Layout from "../../Components/Layout/Layout";
import { useSelector } from "react-redux";
import CartItem from "../../Components/cartItem/CartItem";
import CartPrice from "../../Components/cartprice/CartPrice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Layout>
      <div className="cartPage">
        <h3 style={{ margin: "10px", textAlign: "center" }}>Shopping Cart</h3>
        <CartPrice />
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Cart;
