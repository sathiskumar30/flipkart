import "./App.css";
import { FaSistrix, FaCartPlus } from "react-icons/fa";
import Imageslider from "./Imageslider";
import Navcomponent from "./Navcomponent";
import contents from "./content2";
import { Products } from "./component/products";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartflip from "./Cartflip";
import Buy from "./Buy";
import Account from './Account'
import Register from './Register'
import Footer from "./Footer";
import Footernav from "./Footernav";
import Description from "./Description";

function App() {
  const [datas, setDatas] = useState(contents);
  function addcart(id) {
    setDatas((curdatas) =>
      curdatas.map((item) =>
        item.id === id ? { ...item, Checked: !item.Checked } : item
      )
    );
  }
  function removecart(id) {
    setDatas((curdatas) =>
      curdatas.map((item) =>
        item.id === id ? { ...item, Checked: false } : item
      )
    );
  }
  console.log(contents);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <div className="icon">
            <Link to="/flipkart" id="homenav" ><h3 >Flipkart</h3></Link>
            
          </div>
          <div className="search_box">
            <input
              type="text"
              placeholder="Search for products,brands and more"
              className="search_box"
              // value={search}
            />
            <button id="search_btn">
              <FaSistrix  />
            </button>
          </div>
          <div className="nav_icon">
            <ul>
              <Link to="/account" id="accountnav">
              <li>My Account</li>
              </Link>
              <li>Become as Seller</li>
              <li>More</li>
              <li>
                <Link to="/cart" id="cartuicon">
                  <FaCartPlus className="cart_btn" />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/flipkart" element={<Index datas={datas} addcart={addcart}/>}/>
          <Route path="/cart" element={<Cartflip datas={datas} removecart={removecart}/>} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/Signin" element={<Account />} />
          <Route path="/buy/:id" element={<Buy contents={contents}/>}/>
          <Route path="/contact"/>
        </Routes>
      </BrowserRouter>
      <div className="last_part">
        <Footer/>
      </div>
      <div>
        <Footernav/>
      </div>
    </div>
  );
}

export default App;

function Index({datas,addcart}) {
 
  return (
    <>
      <div className="list_icons">
        <Navcomponent />
      </div>
      <div className="slider">
        <Imageslider />
      </div>
      <div className="mob">
        {datas.map((contents) => (
          <Products
            id={contents.id}
            image={contents.image}
            name={contents.name}
            Checked={contents.Checked}
            price={contents.price}
            oldprice={contents.oldprice}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
            description={contents.description}
            addcart={addcart}
          />
        ))}
      </div>
      <div>
        <Description/>
      </div>
     
    </>
  );
}
