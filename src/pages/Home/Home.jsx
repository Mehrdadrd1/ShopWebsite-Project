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

  let content = [];
  content = <BestSellers />;

  return (
    <Layout>
      <div className="Home">
        <p className="welcom">Welcom to React-FakeShop</p>
        <div className="bestSection">
          <div className="content">{content}</div>
          <div className="btn">
            <Buttons>
              <Link style={linkStyle} to={"/products"}>
                Start Buying
              </Link>
            </Buttons>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
