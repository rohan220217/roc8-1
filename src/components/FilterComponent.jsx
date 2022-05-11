import React from "react";
import { ReactComponent as FilterLogo } from "../assets/icons/filter.svg";
import classes from "./FilterComponent.module.css";

function FilterComponent() {
  return (
    <div className={[classes.fliterContainer].join(" ")}>
      <div className={classes.headingContainer}>
        <h1>Filters</h1>
        <FilterLogo />
      </div>
      <br />
      <h3 className={classes.subHeading}>Cost</h3>
      <form action="" className={classes.checkboxContainer}>
        <input type="checkbox" id="1st" name="1st" value="0" />
        <label htmlFor="1st">Rs 1500 - 4000</label>
        <br />
        <input type="checkbox" id="2nd" name="2nd" value="0" />
        <label htmlFor="2nd">Rs 4001 - 7000</label>
        <br />
        <input type="checkbox" id="3rd" name="3rd" value="0" />
        <label htmlFor="3rd">Rs 7001+</label>
        <br />
      </form>
      <h3 className={classes.subHeading}>Color</h3>
      <div className={classes.colors}>
        {["red", "yellow", "green", "pink", "brown"].map((color) => (
          <div
            className={classes.colorBox}
            key={color}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <br />
      <h3 className={classes.subHeading}>Design Templates</h3>
      <form action="" className={classes.checkboxContainer}>
        <input type="checkbox" id="d1st" name="d1st" value="0" />
        <label htmlFor="d1st">2</label>
        <br />
        <input type="checkbox" id="d2nd" name="d2nd" value="0" />
        <label htmlFor="d2nd">3</label>
        <br />
        <input type="checkbox" id="d3rd" name="d3rd" value="0" />
        <label htmlFor="d3rd">3+</label>
        <br />
        <br />
      </form>
      <h3 className={classes.subHeading}>Type</h3>
      <form action="" className={classes.checkboxContainer}>
        <input type="checkbox" id="t1st" name="t1st" value="0" />
        <label htmlFor="t1st">Loafers</label>
        <br />
        <input type="checkbox" id="t2nd" name="t2nd" value="0" />
        <label htmlFor="t2nd">Sneakers</label>
        <br />

        <br />
      </form>

      <button className={classes.applyButton}>Apply</button>
    </div>
  );
}

export default FilterComponent;
