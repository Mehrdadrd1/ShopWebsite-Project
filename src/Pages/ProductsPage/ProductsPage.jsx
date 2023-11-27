import { useState, useEffect } from "react";
import axios from "axios";
import { Box, ThemeProvider, Typography } from "@mui/material";
import Layout from "../../Components/Layout/Layout";
import Theme from "../../Components/Theme/Theme";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ProductsPage">
      <Layout>
        <ThemeProvider theme={Theme()}>
          <Box
            sx={{
              minHeight: "75vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "color.quaternary",
            }}
          >
            <Typography variant="h5" mt={2} sx={{ color: "color.primary" }}>
              <strong>Products</strong>
            </Typography>
            <Box sx={{ mt: "10px" }}>
              <ul className="Products">
                {products.forEach((product) => {
                  <li>
                    <div className="product" key={product.id}>
                      <img src={product.image} alt="" />
                      <div className="info">
                        <h3>{product.title}</h3>
                        <p>Price:{product.price}</p>
                        <p>{product.description}</p>
                        <button>Submit</button>
                      </div>
                    </div>
                  </li>;
                })}
              </ul>
            </Box>
          </Box>
        </ThemeProvider>
      </Layout>
    </div>
  );
};

export default ProductsPage;

{
  /* <li>
<div class="product">
  <img src="" alt="product" />
  <div class="product-info">
    <h3>product title</h3>
    <p>PRICE: 100$</p>
    <button>Submit</button>
    <a href="" class="addToCard">
      SHOW
    </a>
  </div>
</div>
</li> */
}
