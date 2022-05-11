import React from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import classes from "./ProductDetailPage.module.css";
import shoe from "../assets/images/shoe2.png";

import CartComponent from "../components/CartComponent";

function ProductDetailPage() {
  const history = useNavigate();

  const backButtonHanlder = () => {
    history(-1);
  };
  return (
    <div className={classes.container}>
      <div className={classes.productDetails}>
        <h3 onClick={backButtonHanlder}>&larr; Your Design Space</h3>
        <div className={classes.productDetailContainer}>
          {/* Product Image */}
          <div className={classes.productImageContainer}>
            <img src={shoe} alt="cart product" />
            <div className={classes.productImages}>
              <img src={shoe} alt="cart product" />
              <img src={shoe} alt="cart product" />
              <img src={shoe} alt="cart product" />
            </div>
          </div>
          {/* Product detail  */}
          <div className={classes.productDetail}>
            <h1>KSL 01</h1>
            <h4>by KICKSUP and you</h4>
            <ReactStars
              count={5}
              isHalf={true}
              value={3.5}
              size={22}
              activeColor="#ffd700"
            />{" "}
            <span>80 reviews</span>
            <h3>Rs. 2000/-</h3>
            <p>Get an exclusive 20% off shopping with HDFC bank</p>
            <div className={classes.selectBox}>
              <h3>Front</h3>
              <div className={classes.selectBoxes}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={classes.selectBox}>
              <h3>Middle</h3>
              <div className={classes.selectBoxes}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={classes.selectBox}>
              <h3>Back</h3>
              <div className={classes.selectBoxes}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={classes.selectBox}>
              <h3>Sole</h3>
              <div className={classes.selectBoxes}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={classes.selectBox}>
              <h3>Size</h3>
              <div className={classes.selectBoxes}>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.footerRating}>
            <h3>Rate Product</h3>{" "}
            <ReactStars
              count={5}
              isHalf={true}
              value={0}
              size={20}
              activeColor="#ffd700"
            />
          </div>
          <div className={classes.footerButton}>

          <button className={classes.shareButton}>Share Design</button>
          <button className={classes.addToCartButton}>Add To Cart</button>
          </div>
        </div>
      </div>
      <CartComponent />
    </div>
  );
}

export default ProductDetailPage;
