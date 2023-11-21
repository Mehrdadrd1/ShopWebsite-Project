import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default getProducts;
