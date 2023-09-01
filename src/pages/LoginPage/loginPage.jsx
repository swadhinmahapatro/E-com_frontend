import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { ThreeDots } from "react-loader-spinner";
import LoginPageSvg from "../../assets/loginPageSvg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import { toast } from "react-toastify";
import CustomToast from "../../components/toast/toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetAuth } from "../../redux/actions/authAction";
import styles from "./loginPage.module.css"
export default function LoginPage() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const userInfo = useSelector((state) => state.user.userInfo);

  const [userDetail, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [validator, setValidator] = useState({
    emailvalid: true,
    passvalid: true,
  });

  useEffect(() => {
    dispatch(resetAuth());
  }, []);

  useEffect(() => {
    if (userInfo) {
      navigation("/home");
    }
  }, [userInfo, navigation]);

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigation("/home");
    }
  });

  const renderError = (message) => {
    return <span className={styles.errorField}>{message}</span>;
  };

  const isFormValid = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^.{6,}$/;

    const isEmailValid = emailRegex.test(userDetail.email);
    const isPasswordValid = passwordRegex.test(userDetail.password);

    setValidator({ emailvalid: isEmailValid, passvalid: isPasswordValid });

    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(loginUser(userDetail));
      setUserDetails({ email: "", password: "" });
    }
  };

  return (
    <>
      <div className={styles.navbarCont}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.loginSvg}>
            <LoginPageSvg height={530} width={650} />
            <div className={styles.loginFields}>
              <p className={styles.loginText}>Login To Exclusive</p>
              <p className={styles.loginSmallText}>
                Enter your email and password below
              </p>
              <form autoComplete="on">
                <div className={styles.loginInput}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                   className={styles.SignupFileds}
                    value={userDetail.email}
                    autoComplete="on"
                    onChange={(e) => {
                      setUserDetails({ ...userDetail, email: e.target.value });
                      setValidator({...validator, emailvalid: true});
                    }}
                    placeholder="Email"
                  />
                  {!validator.emailvalid &&
                    renderError("Please Enter the EmailId In a Proper Format")}
                  <input
                    autoComplete="on"
                    type="password"
                    name="password"
                    id="password"
                   className={styles.SignupFileds}
                    value={userDetail.password}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetail,
                        password: e.target.value,
                      });
                      setValidator({...validator, passvalid: true});
                    }}
                    placeholder="Password"
                  />
                  {!validator.passvalid &&
                    renderError("Please Enter the Password In a Proper Format")}
                </div>
              </form>
              <div className={styles.forget}>
                <button
                 className={styles.submit}
                  onClick={handleSubmit}
                  style={{ padding: "12px 58px", marginRight: "10px" }}
                >
                  {loading && (
                    <ThreeDots color="white" height={20} width={40} />
                  )}
                  {!loading && "Login"}
                </button>
                <Link
                  style={{ color: "var(--secondary-2, #DB4444)" }}
                  to="/signup"
                 className={styles.link}
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
