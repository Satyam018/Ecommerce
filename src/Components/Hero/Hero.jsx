import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="herohandicon">
            <div className="newitems">
            <p>New</p>
            <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
          </div>
        </div>
        <div className="herolatestbtn">
          <div>Latest Collections</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} />
      </div>
    </div>
  );
};

export default hero;
