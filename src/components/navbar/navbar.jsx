import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";
export default function navbar() {
  return (
    <>
      <div className="mainContainer">
        <div className="logo">
          <p>Exclusive</p>
        </div>
        <div className="links">
          <Link className="linkText" to="/">Home</Link>
          <Link className="linkText" to="/">Contact</Link>
          <Link className="linkText" to="/">About</Link>
          <Link className="linkText" to="/signup">Signup</Link>
        </div>
      </div>
      <hr style={{color:'#000',opacity: "0.13"}}/>
    </>
  );
}
