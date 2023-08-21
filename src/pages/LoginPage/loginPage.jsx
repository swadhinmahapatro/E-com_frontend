import React from "react";

import Navbar from "../../components/navbar/navbar";
import LoginPageSvg from "../../assets/loginPageSvg";
import {Link} from "react-router-dom";
import Footer from "../../components/footer/footer";
export default function LoginPage() {

  const [userDetail,setUserDetails] = React.useState({
    email:'',
    password:''
  })
  const handleSubmit=()=>{
    console.log(userDetail.email);
    console.log(userDetail.password);
    setUserDetails({email:'',password:''});
  }

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
                  style={{padding: "12px 58px",marginRight: "10px"}}
                >
                  Login
                </button>
                <Link style={{color: 'var(--secondary-2, #DB4444)'}} to="/signup" className="link">
                  Forget Password
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
