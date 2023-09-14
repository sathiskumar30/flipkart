import React from "react";
import { useParams } from "react-router-dom";

const Buy = ({contents}) => {

  const {id} = useParams();
    let datas = contents[id-1];
    console.log("data :",datas);
  return (
    <div className="buynow">
      <h1>Welcome to Buy Now Space</h1>
      <div className="buypage">

        
        <div className="one">
          <img src={datas.image} />
        </div>
        <div className="two">
          <h2>name:{datas.name}</h2>
          <h4>price:{datas.price}</h4>
          <p>Ratings:{datas.rating}</p>
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
