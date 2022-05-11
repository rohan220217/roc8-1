import React, { useContext } from "react";

import { ReactComponent as ClosIcon } from "../../assets/icons/cross.svg";
import CartContext from "../../store/cart-context";

import classes from "./CartCard.module.css";
import shoe from "../../assets/images/shoe2.png";

function CartCard(props) {
  const cartCtx = useContext(CartContext);
  return (
    <div className={classes.card} key={`key-${props.data.id}`}>
      <img src={shoe} alt="cart product" className={classes.cardImage} />
      <ClosIcon
        className={classes.crossIcon}
        onClick={() => cartCtx.removeCartItem(props.data.id)}
      />
      <div className={classes.cardDetails}>
        <h3 className={classes.cardTitle}>{props.data.title}</h3>
        <p>by KICKSUP and you</p>
        <h4>Rs. {props.data.price}/-</h4>
      </div>
    </div>
  );
}

export default CartCard;
