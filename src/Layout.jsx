import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components/PageImport";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
