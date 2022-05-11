import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

import classes from "./ProductCard.module.css";
import shoe from "../../assets/images/shoe2.png";

function ProductCard(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const history = useNavigate();
  const openProductdetail = () => {
    history("/product-detail", { state: props.data });
  };
  return (
    <div
      className={classes.card}
      onClick={openProductdetail}
      key={props.data.id}
    >
      <img src={shoe} alt="product" className={classes.cardImage} />
      <h3 className={classes.cardTitle}>{props.data.title}</h3>
      <div className={classes.cardFooter}>
        <h4>Rs. {props.data.price}/-</h4>

        <ReactStars
          count={5}
          isHalf={true}
          value={props.data.star}
          onChange={ratingChanged}
          size={18}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
}

export default ProductCard;
