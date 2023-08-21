import React from "react";
import "./loginPage.style.css";
import Navbar from "../../components/navbar/navbar";
import LoginPageSvg from "../../assets/loginPageSvg";
import {Link} from "react-router-dom";
export default function LoginPage() {

  const [userDetail,setUserDetails] = React.useState({
    email:'',
    password:''
  })
  const handleSubmit=()=>{

  }

  return (
    <>
      <div className="topheader">
        <p>
          Summer Sale For All Suits And Free Express Delivery - OFF 50% ShopNow{" "}
        </p>
      </div>
      <div className="navbarCont">
        <Navbar />
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
                      setUserDetails({
                        ...userDetail,
                        password: e.target.value,
                      })
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
                </form>
                <div className="forget">
                <button
                  className="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Create
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
