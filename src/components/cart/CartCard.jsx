import React from "react";

import classes from "./CartCard.module.css";
import shoe from "../../assets/images/shoe2.png";

function CartCard() {
  return (
    <div className={classes.card}>
      <img src={shoe} alt="cart product" className={classes.cardImage} />
      <div className={classes.cardDetails}>
        <h3 className={classes.cardTitle}>KSL 01</h3>
        <p>by KICKSUP and you</p>
        <h4>Rs. 2000/-</h4>
      </div>
    </div>
  );
}

export default CartCard;
