import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <form id="accountform">
      <section className="Accountid">     
      <label htmlFor="usernameac">User Name:</label>
      <input type="text" id="usernameac" required autoComplete="off" autoCapitalize="on"/>
      <br />
      <label htmlFor="emailac">Email:</label>
      <input type="email"  id="emailac" />
      <br />
      <button onClick={(e)=>e.preventDefault()} id="signinbtn"> <b>Sign in</b></button>
      <p>
        If you are a New user..Click here to <Link to="/register"> <b>Create account </b></Link>
      </p>
      </section>

    </form>
  );
};

export default Account;
