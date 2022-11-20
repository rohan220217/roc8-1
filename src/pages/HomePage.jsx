import React from "react";
import { Link } from "react-router-dom";

import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classes.homeContainer}>
      <div>
        <div className={classes.card}>
          <h1 className={classes.heading}>First Project for Roc8</h1>
          <p className={classes.subHeading}>
            In this project, I tried to showcase my State Management skill where
            I am using React Context for filtering and storing data in cart. <br />
            Please visit <Link to="/store">STORE</Link> tab for more info.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
