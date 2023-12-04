import Buttons from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Theme from "../../Components/Theme/Theme";
import "./Home.css";
import BestSellers from "../../Components/BestSellers/BestSellers";

const Home = () => {
  const theme = Theme();
  const linkStyle = {
    textDecoration: "none",
    color: theme.palette.color.primary,
  };

  return (
    <Layout>
      <div className="Home">
        <h1 className="header">Welcom to React-FakeShop</h1>
        <div className="bestSeller">
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

export default Home;
