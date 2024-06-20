import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
// const Footer = React.lazy(() => import("./components/Footer"));
// const NavBar = React.lazy(() => import("./components/Navbar"));

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
