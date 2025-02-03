import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addtocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removefromcart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (newCart[itemId] === 0) delete newCart[itemId];
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((sum, itemId) => {
      const item = food_list.find((item) => item._id === itemId);
      return sum + (item ? item.price * cartItems[itemId] : 0);
    }, 0);
  };

  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]);

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        addtocart,
        removefromcart,
        getTotalCartAmount,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
