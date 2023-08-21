import React, { useState } from "react";
import "./SignUpPage.style.css";
import LoginPageSvg from "../../assets/loginPageSvg";
import Navbar from "../../components/navbar/navbar";
import axios from "../../interceptor/interceptor";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function SignUpPage() {
  const history = useNavigate();
  const [userDetail, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    dob: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // axios.post("/")
    axios
      .post("/register", {
        name: userDetail.name,
        email: userDetail.email,
        password: userDetail.password,
        number: userDetail.number,
        dob: userDetail.dob,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.setItem("user-info", "user");
    history("/");
  };

  return (
    <>
      <div className="topheader">
        <p>
          Summer Sale For All Suits And Free Express Delivery - OFF 50% ShopNow{" "}
        </p>
      </div>
      <div className="navbarCont">
        <Navbar />
      </div>
      <div className="container">
        <div className="loginSvg">
          <LoginPageSvg height={500} width={600} />
          <div className="loginFields">
            <p className="loginText">Login To Exclusive</p>
            <p className="loginSmallText">
              Enter your email and password below
            </p>
            <form>
              <div className="loginInput">
                <input
                  className="SignupFileds"
                  type="text"
                  name="name"
                  value={userDetail.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetail, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="SignupFileds"
                  value={userDetail.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetail, email: e.target.value })
                  }
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="SignupFileds"
                  value={userDetail.password}
                  onChange={(e) =>
                    setUserDetails({ ...userDetail, password: e.target.value })
                  }
                  placeholder="Password"
                />
                <input
                  type="date"
                  className="SignupFileds"
                  value={userDetail.dob}
                  onChange={(e) =>
                    setUserDetails({ ...userDetail, dob: e.target.value })
                  }
                  placeholder="Dob"
                />
              </div>
              <button
                className="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Create Account
              </button>
              <div className="already">
                <p className="alreadytext">Already have account?</p>
                <Link className="link" to="/">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
