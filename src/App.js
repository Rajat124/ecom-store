import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { CartContext } from "./context/Context";

function App() {
  const { state } = CartContext();

  // console.log(state);

  return (
    <div>
      <Header></Header>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
