import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <div className="footer">

      <div className="fabout">
        <ul id="fabout">
       <li> <h4>ABOUT</h4></li>
          <li>Contact Us</li>
          <li> About Us</li>
          <li> Careers</li>
          <li> Flipkart Stories </li>
          <li>Press </li>
          <li>Flipkart</li>
          <li>Wholesale</li>
          <li>Cleartrip</li>
           <li>Corporate</li> 
           <li>Information</li>
        </ul>
      </div>
      <div className="fohelp">
       
        <ul id="fohelp">
            <li> <h4>HELP</h4></li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Report</li>
            <li>Infringement</li>
        </ul>
      </div>
      <div className="foconsume">
        <ul id="foconsume">
            <li> <h4>CONSUMER POLICY</h4></li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grivence</li>
            <li>Redressal</li>
            <li>EPR Compliance</li>
        </ul>
      </div>
      <div className="fosocial">
        
        <ul id="fosocial">
            <li><h4>SOCIAL</h4></li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
        </ul>
      </div>
      
      <div id="foempty_line">
        <p></p>
      </div>
      <div className="fomail">
      <ul id="fomail">
        <li><h4>Mail Us :</h4></li>
        <li>Flipkart Internet Private Limited,</li>
        <li> Buildings Alyssa, Begonia &</li>
        <li>Clove Embassy Tech Village,</li>
        <li>Outer Ring Road,</li> <li>Devarabeesanahalli Village,</li>
      <li> Bengaluru, 560103,</li>
      </ul>
      </div>
      <div className="foregistered">
      <ul id="foregistered">
       <li> <h4>Registered Office Address :</h4></li>
        <li>Flipkart Internet Private Limited,</li>
        <li>Buildings Alyssa, Begonia &</li>
        <li>Clove Embassy Tech Village,</li>
        <li>Outer Ring Road, Devarabeesanahalli Village,</li>
        <li>Bengaluru, 560103,</li>
        <li>Karnataka, India</li>
        <li>CIN : U51109KA2012PTC066107</li>
        <li>Telephone: 044-45614700</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;


function contact(){
     return(
         <h2>Contact us</h2>
     )

}
