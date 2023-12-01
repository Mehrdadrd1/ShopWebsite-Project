import Buttons from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Theme from "../../Components/Theme/Theme";
import "./HomePage.css";
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
