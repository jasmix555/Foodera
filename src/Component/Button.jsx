import React from "react";
import "./Btn.scss";

const Button = () => {
  return (
    <div className="btn-wrapper">
      <button className="btn">Login</button>
      <button className="btn btn-regist">Register</button>
    </div>
  );
};

export default Button;
