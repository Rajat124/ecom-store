// import React from "react";

export const cartReducer = (state, action) => {
  // console.log(action.payload);

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
