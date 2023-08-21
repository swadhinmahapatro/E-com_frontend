import React, { useState } from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkIndex) => {
    setActiveLink(linkIndex);
  };

  return (
    <>
    <div className="topheader">
        <p>
          Summer Sale For All Suits And Free Express Delivery - OFF 50% ShopNow{" "}
        </p>
      </div>
      <div className="mainContainer">
        <div className="logo">
          <p>Exclusive</p>
        </div>
        <div className="links">
          <Link className={`linkText ${activeLink === 0 ? "active" : ""}`} onClick={() => handleLinkClick(0)} to="/home">
            Home
          </Link>

          <Link className={`linkText ${activeLink === 1 ? "active" : ""}`} onClick={() => handleLinkClick(1)} to="/">
            Contact
          </Link>

          <Link className={`linkText ${activeLink === 2 ? "active" : ""}`} onClick={() => handleLinkClick(2)} to="/">
            About
          </Link>
          
          <Link className={`linkText ${activeLink === 3 ? "active" : ""}`} onClick={() => handleLinkClick(3)} to="/signup">
            Signup
          </Link>
        </div>
      </div>
      <hr style={{ color: '#000', opacity: "0.13" }} />
    </>
  );
}
