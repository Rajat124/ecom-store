import React, { lazy } from "react";
import Root from "./components/main/Root";
// import Product from "./components/pages/Product";
// import AboutUs from "./components/pages/AboutUs";
// import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Authform from "./components/Auth/Authform";
import { AuthContext } from "./context/AContext";
import { Suspense } from "react";

const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const StoreHome = lazy(() => import("./components/pages/StoreHome"));

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
        <Route path="/product" exact>
          {authCtx.isUserLoggedIn && (
            <Suspense fallback="...Loading">
              <StoreHome />
            </Suspense>
          )}
          {!authCtx.isUserLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/contactUs">
          <Suspense fallback="...Loading">
            <ContactUs />
          </Suspense>
        </Route>
        <Route path="/AboutUs">
          <Suspense fallback="...Loading">
            <AboutUs />
          </Suspense>
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
