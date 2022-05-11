import React from "react";

import { ReactComponent as CartLogo } from "../assets/icons/cart.svg";
import { ReactComponent as LocationLogo } from "../assets/icons/location.svg";
import { ReactComponent as CalendarLogo } from "../assets/icons/calendar.svg";
import { ReactComponent as SearchLogo } from "../assets/icons/search.svg";
import CartCard from "../components/CartCard";
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
        <div className={classes.cartContent}> 
          <div className={classes.cartCards}>
            <CartCard />
            <CartCard />
          </div>
          {/* Cart footer */}
          <div>
            <div className={classes.logoBoxes}>
              <div className={classes.logoBox}>
                <LocationLogo />
                <p>Home</p>
              </div>
              <div className={classes.logoBox}>
                <CalendarLogo />
                <p>Select Date</p>
              </div>
            </div>
            <button className={classes.orderButton}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorePage;
