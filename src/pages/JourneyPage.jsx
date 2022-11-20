import React from "react";

import classes from "./JourneyPage.module.css";

import grassImage from "../assets/images/grasspic.jpg";

function JourneyPage() {
  return (
    <div className={classes.journeyContainer}>
      <div className={classes.imageContainer}>
        <img src={grassImage} alt="grassImage" className={classes.topImage} />
        <h1 className={classes.imageText}>The Journey</h1>
        <div className={classes.imageOverlay}></div>
      </div>
      <div className={classes.content}>
        <div className={classes.contentContainer}>
          <h5 className={classes.contentHeadline}>Blog 1</h5>
          <p className={classes.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatibus corrupti ipsa, obcaecati, sequi perferendis vero totam
            mollitia, illum molestias ab eaque. Consectetur ex ab ipsum vitae
            quibusdam. Iusto, ratione.
          </p>
        </div>
        <div  className={classes.contentContainer}>
          <h5 className={classes.contentHeadline}>Blog 2</h5>
          <p className={classes.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatibus corrupti ipsa, obcaecati, sequi perferendis vero totam
            mollitia, illum molestias ab eaque. Consectetur ex ab ipsum vitae
            quibusdam. Iusto, ratione.
          </p>
        </div>
        <div  className={classes.contentContainer}>
          <h5 className={classes.contentHeadline}>Blog 3</h5>
          <p className={classes.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatibus corrupti ipsa, obcaecati, sequi perferendis vero totam
            mollitia, illum molestias ab eaque. Consectetur ex ab ipsum vitae
            quibusdam. Iusto, ratione.
          </p>
        </div>
        <div  className={classes.contentLastContainer}>
          <h5 className={classes.contentHeadline}>Projects</h5>
          <p className={classes.contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptatibus corrupti ipsa, obcaecati, sequi perferendis vero totam
            mollitia, illum molestias ab eaque. Consectetur ex ab ipsum vitae
            quibusdam. Iusto, ratione.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default JourneyPage;
