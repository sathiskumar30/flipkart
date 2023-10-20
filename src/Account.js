import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    
      <div className="login"> 
        <div className="input1">
           <label className="lab" htmlFor="usernameac">User Name:</label>
              <input type="text" id="usernameac" required autoComplete="off" autoCapitalize="on"/>
         </div>
         <div className="input2">
             <label className="lab" htmlFor="emailac">Email:</label>
              <input type="email"  id="emailac" />
              <br />
         </div>
         <div className="">
              <button onClick={(e)=>e.preventDefault()} id="signinbtn"> <b>Sign in</b></button>
         </div>
         <div className="">
            <p>
              If you are a New user..Click here to <Link to="/register"> <b>Create account </b></Link>
            </p> 
         </div>
       
      </div>
    
  );
};

export default Account;







 {/*  */}

     