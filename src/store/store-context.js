import React, { useState } from "react";

const StoreContext = React.createContext({
  storeData: [],
  filterData: (_) => {},
});

const DUMMY_DATA = [
  { id: 1, title: "KSL 01", price: "2000", star: 3.5, type: "loafer" },
  { id: 2, title: "KSW 01", price: "2500", star: 4.5, type: "sneaker" },
  { id: 3, title: "ROYAL S 01", price: "6000", star: 2.5, type: "loafer" },
  { id: 4, title: "Item 01", price: "2000", star: 3, type: "sneaker" },
  { id: 5, title: "Item 02", price: "8000", star: 4, type: "sneaker" },
  { id: 6, title: "Item 0", price: "1500", star: 3.5, type: "loafer" },
];



export const StoreContextProvider = (props) => {
  const [storeData, setStoreData] = useState(DUMMY_DATA);

  const handleFilter = (filterObject) => {
    let updatedStoreData = [];
 
    DUMMY_DATA.forEach((data) => {
      if (
        (filterObject.price["gr1500less4000"] &&
          data.price >= 1500 &&
          data.price <= 4000) ||
        (filterObject.price["gr4001less7000"] &&
          data.price >= 4001 &&
          data.price <= 7000) ||
        (filterObject.price["gr7001"] && data.price >= 7001) ||
        (filterObject.type["loafer"] && data.type === "loafer") ||
        (filterObject.type["sneaker"] && data.type === "sneaker")
      ) {
        updatedStoreData.push(data);
      }
    });
    setStoreData((prevData) => updatedStoreData);
  };

  

  return (
    <StoreContext.Provider
      value={{
        storeData: storeData,
        filterData: handleFilter,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
