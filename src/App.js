import React from "react";
import Root from "./components/Root";
import Product from "./components/pages/Product";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import ProductDetails from "./components/pages/ProductDetails";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Authform from "./components/Auth/Authform";
import { AuthContext } from "./components/context/Context";

function App() {
  const authCtx = AuthContext();

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
          {!authCtx.isUserLoggedIn && <Authform />}
          {authCtx.isUserLoggedIn && <Redirect to="/product" />}
        </Route>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </Root>
  );
}

export default App;
