import Buttons from "../../Components/Button/Button";
import Layout from "../../Components/Layout/Layout";
import getProducts from "../../server/Data/getProducts";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Layout>
        <div>
          <Buttons onClick={getProducts}>Submit</Buttons>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
