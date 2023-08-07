import React from "react";
import Root from "./components/Root";
import Product from "./components/Product";
// import { CartContext } from "./context/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/store", element: <Product /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/AboutUs", element: <AboutUs /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    /* <Footer /> */
  );
}

export default App;
