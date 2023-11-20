import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
