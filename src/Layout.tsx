import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

const Layout = () => {
  const location = useLocation();
  const noFooter = ["/auth", "/user-form", "/user", "/cart", "/create"];
  const showFooter = !noFooter.includes(location.pathname);
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
