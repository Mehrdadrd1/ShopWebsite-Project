import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";

const Item = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addtoCart({ id, title, image, price }))}>
      Add to Cart
    </button>
  );
};

export default Item;
