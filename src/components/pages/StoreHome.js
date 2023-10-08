import React from "react";
import Product from "./Product";
import Filter from "./Filter/Filter";
import "./style.css";
import { CartContext } from "../../context/Context";

const StoreHome = () => {
  const {
    productState: { searchQuery, byStock, byFastDelivery, sort, byRating },
    products,
  } = CartContext();

  const transFormProduct = () => {
    let sortedProduct = products;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((prod) => prod.rating.count);
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.rating >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProduct;
  };

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transFormProduct().map((prod) => {
          return <Product item={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default StoreHome;
