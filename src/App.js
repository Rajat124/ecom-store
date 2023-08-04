import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { CartContext } from "./context/Context";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";

function App() {
  const { state } = CartContext();

  // console.log(state);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/store" element={<Product />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
