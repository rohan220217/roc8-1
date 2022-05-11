import React from "react";

import classes from "./CartComponent.module.css";
import CartCard from "./CartCard"


import { ReactComponent as CartLogo } from "../../assets/icons/cart.svg";
import { ReactComponent as LocationLogo } from "../../assets/icons/location.svg";
import { ReactComponent as CalendarLogo } from "../../assets/icons/calendar.svg";

function CartComponent() {
  return (
    <div className={classes.cartContainer}>
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
  );
}

export default CartComponent;
