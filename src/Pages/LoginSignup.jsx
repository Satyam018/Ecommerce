import React from "react";
import "./css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsingupcontainer">
        <h1>Sign Up</h1>
        <div className="loginsignupfields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email id" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
        </div>
        <p className="loginsinguplogin">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="loginsignupagree">
          <input type="checkbox" name="" id="" className="checkbox" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
