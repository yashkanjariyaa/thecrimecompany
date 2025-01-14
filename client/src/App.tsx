import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UserData from "./pages/UserData";

const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Create = React.lazy(() => import("./pages/Create"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Auth = React.lazy(() => import("./pages/Authentication"));
const Form = React.lazy(() => import("./pages/Form"));
const Buy = React.lazy(() => import("./pages/Buy"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/create" element={<Create />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/user-form" element={<Form />} />
              <Route path="/user" element={<UserData />} />
              <Route path="/checkout" element={<Buy />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
