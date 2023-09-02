import React, { useState } from "react";
import "./navbar.style.css";
import { Link, useLocation } from "react-router-dom";
import { HambergerMenu } from "iconsax-react";
import { CloseCircle } from "iconsax-react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar

  const handleLinkClick = (linkIndex) => {
    setActiveLink(linkIndex);
    closeSidebar(); // Close the sidebar when a link is clicked
  };



  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const location = useLocation();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
          <span>Exclusive</span>
        </div>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="sidebar">
            <div className="sidebarHeader">
              <CloseCircle variant="Broken" size={24} stroke={0.5} color="#fff" onClick={closeSidebar} />
            </div>
            <div className="sidebarLinks">
              <Link
                className={`linkText ${activeLink === 0 ? "active" : ""}`}
                onClick={() => handleLinkClick(0)}
                to="/home"
              >
                Home
              </Link>
              <Link
                className={`linkText ${activeLink === 1 ? "active" : ""}`}
                onClick={() => handleLinkClick(1)}
                to="/"
              >
                Contact
              </Link>
              <Link
                className={`linkText ${activeLink === 2 ? "active" : ""}`}
                onClick={() => handleLinkClick(2)}
                to="/"
              >
                About
              </Link>
              <Link
                className={`linkText ${activeLink === 3 ? "active" : ""}`}
                onClick={() => handleLinkClick(3)}
                to="/signup"
              >
                Signup
              </Link>
            </div>
          </div>
        )}
        {/* Links */}

        <div className="links">
          <Link className={`linkText ${activeLink === 1 ? "active" : ""}`} onClick={() => handleLinkClick(1)} to="/">
            Login
          </Link>

          <Link className={`linkText ${activeLink === 0 || location.pathname === "/home" ? "active" : ""}`} onClick={() => handleLinkClick(0)} to="/home">
            Home
          </Link>

          <Link className={`linkText ${activeLink === 1 ? "active" : ""}`} onClick={() => handleLinkClick(1)} to="/contact">
            Contact
          </Link>


          <Link className={`linkText ${activeLink === 2 || location.pathname === "/about" ? "active" : ""}`} onClick={() => handleLinkClick(2)} to="/about">
            About
          </Link>

          <Link className={`linkText ${activeLink === 3 || location.pathname === "/signup" ? "active" : ""}`} onClick={() => handleLinkClick(3)} to="/signup">
            Signup
          </Link>
        </div>
        <div className="hamburger">
          {!isSidebarOpen &&
            <HambergerMenu
              variant="Broken"
              size={24}
              stroke={0.5}
              color="#000"
              onClick={openSidebar}
            />}
        </div>

      </div>
      <hr style={{ color: "#000", opacity: "0.13" }} />
    </>
  );
}
