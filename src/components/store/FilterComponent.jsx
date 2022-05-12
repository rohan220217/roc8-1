import React, { useContext,  useState } from "react";

import { ReactComponent as FilterLogo } from "../../assets/icons/filter.svg";
import StoreContext from "../../store/store-context";

import classes from "./FilterComponent.module.css";

function FilterComponent() {
  const storeCtx = useContext(StoreContext);

  const [filterOption, setFilterOption] = useState({
    price: {
      gr1500less4000: false,
      gr4001less7000: false,
      gr7001: false,
    },
    type: {
      loafer: false,
      sneaker: false,
    },
  });
  const handlePriceChange = (e) => {
    const { name } = e.target;
    const updatedValue = {
      ...filterOption,
      price: {
        ...filterOption["price"],
        [name]: !filterOption.price[name],
      },
    };
    setFilterOption((prevState) => {
      return updatedValue;
    });
  };
  const handleTypeChange = (e) => {
    const { name } = e.target;
    const updatedValue = {
      ...filterOption,
      type: {
        ...filterOption["type"],
        [name]: !filterOption.type[name],
      },
    };
    setFilterOption((prevState) => {
      return updatedValue;
    });
  };

  const applyFilter = () => {
    storeCtx.filterData(filterOption);
  };

  return (
    <div className={[classes.fliterContainer].join(" ")}>
      <div className={classes.headingContainer}>
        <h1>
          Filters
          {/* {JSON.stringify(filterOption)} */}
        </h1>
        <FilterLogo />
      </div>
      <br />
      <div className={classes.filterContent}>
        <div>
          <h3 className={classes.subHeading}>Cost</h3>
          <form action="" className={classes.checkboxContainer}>
            <input
              type="checkbox"
              id="1st"
              name="gr1500less4000"
              checked={filterOption.price.gr1500less4000}
              onChange={handlePriceChange}
            />
            <label htmlFor="1st">Rs 1500 - 4000</label>
            <br />
            <input
              type="checkbox"
              id="2nd"
              name="gr4001less7000"
              checked={filterOption.price.gr4001less7000}
              onChange={handlePriceChange}
            />
            <label htmlFor="2nd">Rs 4001 - 7000</label>
            <br />
            <input
              type="checkbox"
              id="3rd"
              name="gr7001"
              checked={filterOption.price.gr7001}
              onChange={handlePriceChange}
            />
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
            <input
              type="checkbox"
              id="t1st"
              name="loafer"
              checked={filterOption.type.loafer}
              onChange={handleTypeChange}
            />
            <label htmlFor="t1st">Loafers</label>
            <br />
            <input
              type="checkbox"
              id="t2nd"
              name="sneaker"
              checked={filterOption.type.sneaker}
              onChange={handleTypeChange}
            />
            <label htmlFor="t2nd">Sneakers</label>
            <br />
            <br />
          </form>
        </div>
        {/* <button className={classes.applyButton} onClick={()=>storeCtx.filterData('')}>Apply</button> */}
        <button className={classes.applyButton} onClick={applyFilter}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterComponent;
