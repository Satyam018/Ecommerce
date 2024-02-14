import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  // const {all_product}=useContext(ShopContext)

  const { all_product, cartItem, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitemformatmain">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cartitemsformat cartitemformatmain">
                <img className="carticonproducticon" src={e.image} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItemQuantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img src={remove_icon}
                className="carticonremove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitemdown">
        <div className="cartitemstotal">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitemtotalitem">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitemtotalitem">
                    <p>Shipping Fees</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitemtotalitem">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitempromocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitempromobox">
                <input type="text" placeholder="promocode" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
