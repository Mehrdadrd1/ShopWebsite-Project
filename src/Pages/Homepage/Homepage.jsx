import Buttons from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Theme from "../../Components/Theme/Theme";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Svgs from "../../SVGs/Svgs";
import ProductCard from "../../Components/ProductCard/ProductCard";
import BestSellers from "../../Components/BestSellers/BestSellers";

const HomePage = () => {
  const theme = Theme();
  const linkStyle = {
    textDecoration: "none",
    color: theme.palette.color.primary,
  };

  return (
    <Layout>
      <div className="HomePage">
        <h1 className="header">Welcom to React-FakeShop</h1>
        <div className="bestSeller">
          <p>BEST OF US:</p>
          <BestSellers />
        </div>
        <div className="btn">
          <Buttons>
            <Link style={linkStyle} to={"/products"}>
              Start Buying...
            </Link>
          </Buttons>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
