const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
