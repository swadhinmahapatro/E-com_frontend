import React from "react";
import { Send } from "iconsax-react";
import "./footer.style.css";
export default function Footer() {
  return (
    <>
      <div className="cont">
        <div className="root">
          <div className="1stcol">
            <p className="headtext">Exclusive</p>
            <p className="headtext">Subscribe</p>
            <p className="smalltext">Get 10% off your first order</p>
            <div className="input">
              <input
                className="emailinput"
                type="email"
                placeholder="Enter your email"
              ></input>
              <button className="sendbutton">
                <Send variant="Linear" size={20} color="#fff" />
              </button>
            </div>
          </div>
          <div className="2ndcol">
            <p className="headtext">Support</p>
            <p>
              <p className="smalltext">DH 1515, India</p>
              <p className="smalltext">111 Bhubneshwar, patia</p>
              <p className="smalltext">exclusive@gmail.com</p>
              <p className="smalltext">+880 123 456 789</p>
            </p>
          </div>
          <div className="3rdcol">
            <p className="headtext">Account</p>
            <p className="smalltext">My account</p>
            <p className="smalltext">Login/Register</p>
            <p className="smalltext">Cart</p>
            <p className="smalltext">Wishlist</p>
            <p className="smalltext">Shop</p>
          </div>
          <div className="4thcol">
            <p className="headtext">Quick links</p>
            <p className="smalltext">privacy Policy</p>
            <p className="smalltext">Terms of use</p>
            <p className="smalltext">FAQ</p>
            <p className="smalltext">Contact</p>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2022 All rights reserved</p>
        </div>
      </div>
    </>
  );
}
