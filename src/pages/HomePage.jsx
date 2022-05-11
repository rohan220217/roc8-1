import React from "react";

import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classes.homeContainer}>
      <div>
        <div className={classes.card}>
          <h1 className={classes.heading}>Demo Project for Internship</h1>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
