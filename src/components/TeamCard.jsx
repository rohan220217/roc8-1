import React from "react";
import classes from "./TeamCard.module.css";

function TeamCard({ image, title, subtitle, alt, icons, key }) {
  return (
    <div className={classes.card} key={key}>
      <div>
        <img src={image} alt={alt} className={classes.cardImage} />
        <h3 className={classes.cardTitle}>{title}</h3>
        <p className={classes.cardSubTitle}>{subtitle}</p>
      </div>
      <div className={classes.cardLinks}>
        {icons.map((icon) => (
          <img src={icon.image} alt={icon.name} key={`icon-${icon.name}`} />
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
