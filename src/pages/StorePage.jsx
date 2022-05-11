import React from "react";

import { ReactComponent as CartLogo } from "../assets/icons/cart.svg";
import { ReactComponent as SearchLogo } from "../assets/icons/search.svg";
import FilterComponent from "../components/FilterComponent";
import ProductCard from "../components/ProductCard";

import classes from "./StorePage.module.css";

function StorePage() {
  return (
    <div className={classes.container}>
      {/* Filter Component */}
      <FilterComponent />

      {/* Main Shop Component */}
      <div className={[classes.shopContainer, classes.card].join(" ")}>
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
      <div className={[classes.cartContainer, classes.card].join(" ")}>
        <div className={classes.headingContainer}>
          <h1>Cart</h1>
          <CartLogo />
        </div>
      </div>
    </div>
  );
}

export default StorePage;
