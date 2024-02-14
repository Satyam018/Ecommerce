import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu,setmenu]=useState('shop');
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div>
      <div className="navbar">
        <div className="navlogo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="navmenu">
          <li onClick={()=>{setmenu('shop')}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('men')}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link> {menu==='men'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('women')}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==='women'?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu('kids')}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
         <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
          <div className="navcartcount">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
