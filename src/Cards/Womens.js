import React, { useState } from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Action/Action";
import Womensdata from "../Cardsdata/Womensdata";

const Womens = () => {
  const [data, setdata] = useState(Womensdata);
  const getdata = useSelector((state) => state.reducers.Womens);
  console.log(getdata);
  const dispatch = useDispatch();

  function send(e) {
    dispatch(add(e));
  }

  return (
    <div>
      <div className="baner-img">
        {/* <img
          src="https://c1.wallpaperflare.com/preview/611/623/662/trainer-sneaker-hi-tops-nike.jpg"
          alt=""
        /> */}
        <h2>Our Products</h2>
      </div>
      <div className="grid">
        {data.map(function (val) {
          return (
            <div className="card" key={val.id}>
              <div className="img">
                <img src={val.imgurl} />
              </div>
              <div className="desc">
                <h3 className="hoesname"> {val.shoesname} </h3>
                <p className="price">PRICE ₹ {val.price} </p>
                <p> {val.quantity} </p>
              </div>

              <div className="btn">
                <button className="first-color" onClick={() => send(val)}>
                  Addtocart
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
                <button className="second-color">
                  Buynow
                  <i className="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <div className="supprot">
          <h2>SUPPORT</h2>
          <h4>Contact us</h4>
          <h4>Promotions & Sale</h4>
          <h4>Track Order</h4>
          <h4>Privacy Policy</h4>
          <h4>Terms & Conditions</h4>
          <h4>Cookie Settings</h4>

        </div>

        <div className="faq">
        <h2>FAQs</h2>
          <h4>My Account</h4>
          <h4>Return Policy</h4>
          <h4>Tech Glossary</h4>
          <h4>Initiate Return</h4>
        </div>

        <div className="about">
          <h2>ABOUT</h2>
          <h4>Company</h4>
          <h4>Corporate News</h4>
          <h4>Press Center</h4>
          <h4>Investors</h4>
          <h4>Sustainability</h4>
          <h4>Careers</h4>
          <h4>Store Finder</h4>
          <h4>PUMA DNA</h4>

        </div>

        <div className="stay-update">
            <h2>STAY UP TO DATE</h2>

            <div className="iconses">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            </div>
            <h3>EXPLORE...</h3>

            <div className="puma-logo">

                <img src="puma.jpeg" alt=""  id="one"/>
                <img src="puma.jpeg" alt=""  id="two"/>

            </div>
        </div>
   
      </div>

    </div>
  );
};

export default  Womens