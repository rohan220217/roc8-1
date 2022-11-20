import React, { useContext } from "react";
import { ReactComponent as SearchLogo } from "../assets/icons/search.svg";

import FilterComponent from "../components/store/FilterComponent";
import ProductCard from "../components/store/ProductCard";
import CartComponent from "../components/cart/CartComponent";
import StoreContext from "../store/store-context";

import classes from "./StorePage.module.css";

function StorePage() {
  const storeCtx = useContext(StoreContext);


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
          {storeCtx.storeData.length === 0 ? (
            <h4 style={{ margin: "15rem auto" }}>No Product </h4>
          ) : (
            storeCtx.storeData.map((data) => (
              <ProductCard data={data} key={data.id} />
            ))
          )}
        </div>
      </div>

      {/* Cart Component */}
      <CartComponent />
    </div>
  );
}

export default StorePage;
