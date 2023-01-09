import NavBar from "../NavbarCompount/navbar";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
