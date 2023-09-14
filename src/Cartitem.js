import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const cartitem = (props) => {
  return (
    <div className="content_cart">
      <FaTimes id="remove_btn" onClick={()=>{props.removecart(props.id)}}/>
      <div className="cartone">
        <img src={props.image} id="cart_image" />
      </div>
      <div className="carttwo">
        <p className="product_name"> Name:{props.name}</p>
        <p className="product_price">Price:₹{props.price}</p>
        <h4 className="totalprice">Total Price:₹{props.price}</h4>
      </div>
    </div>
  );
};

export default cartitem;
