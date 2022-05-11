import React, { useState } from "react";

const CartContext = React.createContext({
  cartData: [],
  addCartItem: (data) => {},
  removeCartItem: (id) => {},
});

export const CartContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);

  const addCartItemHandler = (data) => {
    console.log(data);
    setCartData((prevData) => [...prevData, data]);
  };

  const removeCartItemHandler = (id) => {
    const updatedCartData = cartData.filter((data)=> data.id !== id);
    setCartData(updatedCartData );
  };

  return (
    <CartContext.Provider
      value={{
        data: cartData,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
