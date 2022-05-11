import React from "react";
import { ReactComponent as SearchLogo } from "../assets/icons/search.svg";

import FilterComponent from "../components/FilterComponent";
import ProductCard from "../components/ProductCard";

import classes from "./StorePage.module.css";
import CartComponent from "../components/CartComponent";

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      {/* Cart Component */}
      <CartComponent />
    </div>
  );
}

export default StorePage;
