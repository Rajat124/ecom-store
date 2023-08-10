import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Root = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Root;
