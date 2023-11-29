import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Layout from "../../Components/Layout/Layout";
const ProductsPage = () => {
  const [products, setProducts] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = response;
      console.log("Products:", products);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "color.quaternary",
        }}
      >
        <div className="productsTitle">
          <Typography variant="h5" mt={2} sx={{ color: "color.primary" }}>
            <strong>Products</strong>
          </Typography>
        </div>
        <div className="productsCard">
          <ul className="productCard">
            <li>
              <div className="product">
                <img src="" alt="" />
              </div>
            </li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
            <li>Product 5</li>
          </ul>
        </div>
      </Box>
    </Layout>
  );
};

export default ProductsPage;
