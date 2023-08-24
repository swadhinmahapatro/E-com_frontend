import React, {useEffect} from "react";
import Navbar from "../../components/navbar/navbar";
import { ThreeDots } from "react-loader-spinner";
import LoginPageSvg from "../../assets/loginPageSvg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { toast } from "react-toastify";
import CustomToast from "../../components/toast/toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetAuth, resetAuthState } from "../../redux/actions/authAction";

export default function LoginPage() {
  const navigation = useNavigate();
  const [userDetail, setUserDetails] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const userInfo = useSelector(state => state.user.userInfo);

  useEffect(() => {
    dispatch(resetAuth());
  }, []);

  useEffect(()=>{
    if(userInfo){
      navigation("/home");
    }
  },[userInfo,navigation]);

  useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigation("/home");
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userDetail));
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
              <form autoComplete="on">
                <div className="loginInput">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="SignupFileds"
                    value={userDetail.email}
                    autoComplete="on"
                    onChange={(e) =>
                      setUserDetails({ ...userDetail, email: e.target.value })
                    }
                    placeholder="Email"
                  />

                  <input
                    autoComplete="on"
                    type="password"
                    name="password"
                    id="password"
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
