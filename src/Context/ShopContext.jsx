import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart()); 

  const addToCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  };
  const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  };

  const getTotalCartItems=()=>{
    let totalitem=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalitem+=cartItem[item];
      }
    }
    return totalitem;
  }

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
          let itemInfo=all_product.find((product)=>product.id===Number(item))
          totalAmount+=itemInfo.new_price*cartItem[item];
      }
    }
    return totalAmount;
  }

  // const contextValue = { all_product,addToCart,removeFromCart,cartItem}; // Include cartItem in context value
  const contextValue = { all_product, addToCart, removeFromCart, cartItem ,getTotalCartAmount,getTotalCartItems};


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
