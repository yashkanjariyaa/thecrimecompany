import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Create = React.lazy(() => import("./pages/Create"));
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
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
