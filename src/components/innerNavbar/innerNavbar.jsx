import React, { useEffect, useState } from "react";
import "./innerNavbar.style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import {
  SearchStatus1,
  Heart,
  ShoppingCart,
  HambergerMenu,
  CloseCircle,
  Profile,
  Logout,
} from "iconsax-react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
export default function InnerNavbar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State for sidebar
  const [showlogout, setshowlogout] = useState(false);
  const [openbelowbar, setOpenBelowbar] = useState(false);

  const sidebarRef = React.useRef(null);
  const [name, setName] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleresize = () => {
      if (window.innerWidth > 867 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
      if (window.innerWidth) {
        handleClose();
      }
    };
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, [isSidebarOpen, anchorEl]);

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    if (user) {
      setshowlogout(true);
    }
    let name = "";
    name = JSON.parse(localStorage.getItem("user-info")).name;
    let arr = name.split(" ");
    name = "";
    arr.forEach((item) => {
      name += item[0];
    });
    setName(name);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
  const handlelogout = () => {
    localStorage.removeItem("user-info");
    // localStorage.removeItem("authToken");
    setshowlogout(false);
    navigate("/");
  };

  return (
    <>
      <div className="custom-topheader">
        <p>
          Summer Sale For All Suits And Free Express Delivery - OFF 50% ShopNow{" "}
        </p>
      </div>
      <div className="custom-mainContainer">
        <div className="custom-logo">
          <p>Exclusive</p>
        </div>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="custom-sidebar" ref={sidebarRef}>
            <div className="custom-sidebarHeader">
              <CloseCircle
                variant="Broken"
                size={24}
                stroke={0.5}
                color="#fff"
                onClick={closeSidebar}
              />
            </div>
            <div className="custom-sidebarLinks">
              <Link
                className={`custom-linkText ${
                  activeLink === 0 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(0)}
                to="/home"
              >
                Home
              </Link>
              <Link
                className={`custom-linkText ${
                  activeLink === 1 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(1)}
                to="/"
              >
                Contact
              </Link>
              <Link
                className={`custom-linkText ${
                  activeLink === 2 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(2)}
                to="/about"
              >
                About
              </Link>
              {showlogout && (
                <Link
                  className={`custom-linkText ${
                    activeLink === 3 ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick(3)}
                  to="/signup"
                >
                  Signup
                </Link>
              )}
              <Link
                className={`custom-linkText  ${
                  activeLink === 4 || location.pathname === "/watchlist"
                    ? "active"
                    : ""
                } watchlist`}
                onClick={() => handleLinkClick(4)}
                to="/watchlist"
              >
                watchlist
              </Link>
              <Link
                className={`custom-linkText ${
                  activeLink === 5 || location.pathname === "/cart"
                    ? "active"
                    : ""
                } cart`}
                onClick={() => handleLinkClick(5)}
                to="/cart"
              >
                Cart
              </Link>
              {showlogout && (
                <Link
                  className={`custom-linkText ${
                    activeLink === 5 ? "active" : ""
                  }`}
                  onClick={() => {
                    handlelogout();
                  }}
                  to="/"
                >
                  logout
                </Link>
              )}
            </div>
          </div>
        )}
        {/* Links */}
        <div className="custom-links">
          <Link
            className={`custom-linkText ${
              activeLink === 0 || location.pathname === "/home" ? "active" : ""
            }`}
            onClick={() => handleLinkClick(0)}
            to="/home"
          >
            Home
          </Link>

          <Link
            className={`custom-linkText ${activeLink === 1 ? "active" : ""}`}
            onClick={() => handleLinkClick(1)}
            to="/"
          >
            Contact
          </Link>

          <Link
            className={`custom-linkText ${activeLink === 2 || location.pathname === "/about" ? "active" : ""}`}
            onClick={() => handleLinkClick(2)}
            to="/about"
          >
            About
          </Link>

          {!localStorage.getItem("user-info") && (
            <Link
              className={`custom-linkText ${
                activeLink === 3 || location.pathname === "/signup"
                  ? "active"
                  : ""
              }`}
              onClick={() => handleLinkClick(3)}
              to="/signup"
            >
              Signup
            </Link>
          )}
          <div className="custom-searchandwatchandCart">
            <div className="custom-input">
              <input
                type="text"
                name="search"
                placeholder="what are you looking for?"
                id=""
              />
              <SearchStatus1
                className="custom-searchicon"
                size={24}
                color="#0f0f0f"
                stroke={0.5}
                variant="Linear"
              />
            </div>
            <div className="icons">
              <Heart
                style={{ marginRight: "2rem" }}
                className="hearticon"
                size={24}
                color="#000000"
                stroke={0.5}
                variant="Linear"
              />
              <ShoppingCart
                className="carticon"
                size={24}
                color="#000000"
                stroke={0.5}
                variant="Linear"
              />
            </div>
          </div>
          <div className="custom-avtar">
            <Avatar
              sx={{
                bgcolor: "#757575",
                border: "2px solid #ec804f",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {name}
            </Avatar>
            <Menu
              style={{ marginTop: "1rem" }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div>
                <MenuItem onClick={handleClose} className="custom-menu-item ">
                  <Profile
                    size={20}
                    color="#000000"
                    stroke={0.5}
                    variant="Linear"
                  />
                  &nbsp;Profile
                </MenuItem>
                <MenuItem onClick={handleClose} className="custom-menu-item ">
                  {" "}
                  <Logout
                    size={20}
                    color="#000000"
                    stroke={0.5}
                    variant="Linear"
                  />
                  &nbsp;Logout
                </MenuItem>
              </div>
            </Menu>
          </div>
        </div>
      </div>
      {!isSidebarOpen && (
        <div className="custom-hamburger">
          <div className="ham">
            <HambergerMenu
              variant="Broken"
              size={24}
              stroke={0.5}
              color="#000"
              onClick={openSidebar}
            />
          </div>
          <div className="custom-input">
            <input
              type="text"
              name="search"
              placeholder="what are you looking for? "
              id=""
            />
            <SearchStatus1
              className="custom-searchicon"
              size={24}
              color="#0f0f0f"
              stroke={0.5}
              variant="Linear"
            />
          </div>
          <div className="icons">
            <Heart
              style={{ marginRight: "15px" }}
              className="hearticon"
              size={24}
              color="#000000"
              stroke={0.5}
              variant="Linear"
            />
            <ShoppingCart
              className="carticon"
              size={24}
              color="#000000"
              stroke={0.5}
              variant="Linear"
            />
          </div>
        </div>
      )}

      <hr style={{ color: "#000", opacity: "0.13" }} />
    </>
  );
}
