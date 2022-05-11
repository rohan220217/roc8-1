import React from "react";
import ReactStars from "react-rating-stars-component";

import classes from "./ProductCard.module.css";
import shoe from "../assets/images/shoe2.png";

function ProductCard() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className={classes.card}>
      <img src={shoe} alt="product" className={classes.cardImage} />
      <h3 className={classes.cardTitle}>KSL 01</h3>
      <div className={classes.cardFooter}>
        <h4>Rs. 2000/-</h4>

        <ReactStars
          count={5}
          isHalf={true}
          value={3.5}
          onChange={ratingChanged}
          size={18}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
}

export default ProductCard;
