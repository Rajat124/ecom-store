import React, { useContext, useEffect, useReducer, useState } from "react";
import { cartReducer, productReducer } from "./Reducer";

const cart = React.createContext();

export const CartContext = () => {
  return useContext(cart);
};

const EContext = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=20");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    totalValue: 0,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <cart.Provider
      value={{ state, dispatch, products, productState, productDispatch }}
    >
      {props.children}
    </cart.Provider>
  );
};

export default EContext;
