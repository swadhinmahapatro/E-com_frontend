import React, { useState } from "react";

import Navbar from "../../components/navbar/navbar";
import { ThreeDots } from "react-loader-spinner";
import LoginPageSvg from "../../assets/loginPageSvg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import axios from "../../interceptor/interceptor";
import { toast } from "react-toastify";
import CustomToast from "../../components/toast/toast";
export default function LoginPage() {
  const navigation = useNavigate();
  const [userDetail, setUserDetails] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post("/login", userDetail).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        localStorage.setItem("user-info", "user");
        navigation("/home");
        console.log(res);
        CustomToast({type:"success",message:res.data.message})
      }
    }).catch((err)=>{
      setLoading(false);
      CustomToast({type:"error",message:err.response.data.message})  
    });
    setUserDetails({ email: "", password: "" });
  };

  return (
    <>
      <div className="navbarCont">
        <Navbar />
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
                      setUserDetails({
                        ...userDetail,
                        password: e.target.value,
                      })
                    }
                    placeholder="Password"
                  />
                </div>
              </form>
              <div className="forget">
                <button
                  className="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  style={{ padding: "12px 58px", marginRight: "10px" }}
                >
                  {loading ? (
                    <ThreeDots color="white" height={20} width={40} />
                  ) : (
                    "Login"
                  )}
                </button>
                <Link
                  style={{ color: "var(--secondary-2, #DB4444)" }}
                  to="/signup"
                  className="link"
                >
                  Forget Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
