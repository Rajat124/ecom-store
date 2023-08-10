import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AContext from "./components/context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <AContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AContext>
  </Context>
);
