import React, { useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const cart = React.createContext();

export const CartContext = () => {
  return useContext(cart);
};

const Context = (props) => {
  const [state, dispatch] = useReducer(cartReducer, {
    totalValue: 0,
    cart: [],
  });

  return (
    <cart.Provider value={{ state, dispatch }}>{props.children}</cart.Provider>
  );
};

export default Context;
