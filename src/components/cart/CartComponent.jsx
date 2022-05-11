import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./CartComponent.module.css";
import CartCard from "./CartCard";

import { ReactComponent as CartLogo } from "../../assets/icons/cart.svg";
import { ReactComponent as LocationLogo } from "../../assets/icons/location.svg";
import { ReactComponent as CalendarLogo } from "../../assets/icons/calendar.svg";

function CartComponent() {
  const cartCtx = useContext(CartContext);
  const isEmpty = () => {
    return cartCtx.data.length === 0;
  };
  return (
    <div className={classes.cartContainer}>
      <div className={classes.headingContainer}>
        <h1>Cart</h1>
        <CartLogo />
      </div>
      <div className={classes.cartContent}>
        <div className={classes.cartCards}>
          {isEmpty() ? (
            <h4 style={{ margin: "15rem auto" }}>
              What's stopping you designer?
            </h4>
          ) : (
            <>
              {cartCtx.data.map((data) => (
                <CartCard data={data} key={data.id} />
              ))}
            </>
          )}
        </div>
        {/* Cart footer */}
        <div>
          <div
            className={isEmpty() ? classes.logoBoxesDisable : classes.logoBoxes}
          >
            <div className={classes.logoBox}>
              <LocationLogo stroke={isEmpty() ? "gray" : "black"} />
              <p>Home</p>
            </div>
            <div className={classes.logoBox}>
              <CalendarLogo stroke={isEmpty() ? "gray" : "black"} />
              <p>Select Date</p>
            </div>
          </div>
          <button
            className={
              isEmpty() ? classes.orderButtonDiabled : classes.orderButton
            }
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
