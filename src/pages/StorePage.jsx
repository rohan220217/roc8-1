import React from "react";
import { ReactComponent as SearchLogo } from "../assets/icons/search.svg";

import FilterComponent from "../components/store/FilterComponent";
import ProductCard from "../components/store/ProductCard";
import CartComponent from "../components/cart/CartComponent";

import classes from "./StorePage.module.css";

const DUMMY_DATA = [
  { id: 1, title: "KSL 01", price: "2000", star: 3.5 },
  { id: 2, title: "KSW 01", price: "2500", star: 4.5 },
  { id: 3, title: "ROYAL S 01", price: "6000", star: 2.5 },
  { id: 4, title: "Item 01", price: "2000", star: 3 },
  { id: 5, title: "Item 02", price: "1000", star: 4 },
  { id: 6, title: "Item 0", price: "1500", star: 3.5 },
];

function StorePage() {
  return (
    <div className={classes.container}>
      {/* Filter Component */}
      <FilterComponent />

      {/* Main Shop Component */}
      <div className={classes.shopContainer}>
        <div className={classes.headingContainer}>
          <h1>Shoes</h1>
          <div className={classes.headingButton}>
            <SearchLogo />
            <button>Sort By</button>
          </div>
        </div>
        <div className={classes.productCards}>
          {DUMMY_DATA.map((data) => (
            <ProductCard data={data} key={data.id} />
          ))}
        </div>
      </div>

      {/* Cart Component */}
      <CartComponent />
    </div>
  );
}

export default StorePage;
