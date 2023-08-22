import React, { useEffect, useState } from "react";

import LoginPageSvg from "../../assets/loginPageSvg";
import Navbar from "../../components/navbar/navbar";
import axios from "../../interceptor/interceptor";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUpPage.style.css";
import Footer from "../../components/footer/footer";
import CustomToast from "../../components/toast/toast";
export default function SignUpPage() {
  const history = useNavigate();
  const [userDetail, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    dob: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/");
    }
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
      .then((res) => {
        if (res.status === 200) {
          CustomToast({ type: "success", message: res.data.message });
          localStorage.setItem("user-info", "user");
          history("/");
        }
      })
      .catch((error) => {
        CustomToast({ type: "error", message: error.response.data.message });
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbarCont">
        <Navbar />
      </div>
      <div className="container">
        <div className="loginSvg">
          <LoginPageSvg height={530} width={650} />
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
                  className="SignupFileds"
                  type="text"
                  name="name"
                  value={userDetail.number}
                  onChange={(e) =>
                    setUserDetails({ ...userDetail, number: e.target.value })
                  }
                  placeholder="Phone Number"
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
      <Footer />
    </>
  );
}
