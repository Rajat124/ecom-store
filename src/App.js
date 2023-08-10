import React from "react";
import Root from "./components/Root";
import Product from "./components/pages/Product";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import ProductDetails from "./components/pages/ProductDetails";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Authform from "./components/Auth/Authform";

function App() {
  return (
    <Root>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/auth">
          <Authform />
        </Route>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </Root>
  );
}

export default App;
