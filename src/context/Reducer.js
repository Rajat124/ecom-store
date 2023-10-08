// import React from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.findIndex(
        (ele) => ele.id === action.payload.id
      );

      if (existingItem === -1) {
        return {
          totalValue: state.totalValue + Number(action.payload.price),
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      } else {
        alert("This item is already added to the cart");
        return {
          totalValue: state.totalValue + Number(action.payload.price),
          cart: [...state.cart],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        totalValue: state.totalValue - Number(action.payload.price),
        cart: state.cart.filter((ele) => ele.id !== action.payload.id),
      };

    case "CHANGING_ITEM_QTY":
      return {
        totalValue:
          state.totalValue +
          Number(action.payload.item.price * action.payload.qty),
        cart: [...state.cart],
      };

    case "USER_REFRESHED":
      return {
        ...state,
        cart: [...action.payload],
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
};
