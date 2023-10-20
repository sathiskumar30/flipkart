import React from "react";
import { useParams } from "react-router-dom";

const Buy = ({contents}) => {

  const {id} = useParams();
    let datas = contents[id-1];
  return (
    <div id="description"
    className="buynow">
      <h1>Welcome to Buy Now Space</h1>
      <div className="buypage">

        
        <div className="one">
          <img src={datas.image} />
        </div>
        <div className="two">
          <h4>Name of the product: {datas.name}</h4>
          <h4>Price of Product:{datas.price}</h4>
          <p>Total Price={datas.price}</p>
        </div>
        <title>Descrption</title>
        <p>{datas.descrption}</p>
      </div>
        <button className="finalbtn">Place Your order</button>
    </div>
  );
};

export default Buy;
