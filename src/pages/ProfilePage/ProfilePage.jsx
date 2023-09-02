import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import {
  getUserData,
  resetUserDataFetch,
  updateUserData,
} from "../../redux/actions/profileAction";
import ProductAdd from "../../components/adminProductPannel/ProductAdd";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState();
  const [name, setName] = useState("");
  const [confirmPass, SetConfirmPass] = useState("");
  const profileData = useSelector((state) => state.profile.userData);
  const updateData = useSelector(
    (state) => state.updateProfile.UpdateduserData
  );
  const location = useLocation();
  const [validator, setValidator] = useState({
    numberValid: true,
    emailValid: true,
    nameValid: true,
    passwordValid: true,
    confirmPasswordValid: true,
    dobValid: true,
  });

  // Fetch user data initially
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      const user = JSON.parse(localStorage.getItem("user-info"));
      dispatch(getUserData(user.id));
    }
  }, []);

  // Update user details when profileData changes
  useEffect(() => {
    if (profileData) {
      setUserDetails({ ...profileData.user, password: "" });
    }
  }, [profileData]);

  // Reset user data on component unmount
  useEffect(() => {
    return () => {
      dispatch(resetUserDataFetch());
    };
  }, [dispatch]);

  // Set the name when userDetails or name is empty
  useEffect(() => {
    if (userDetails && userDetails.name) {
      setName(userDetails.name);
    }
  }, [userDetails]);

  // Update user details if updateData changes
  useEffect(() => {
    if (updateData) {
      setUserDetails({ ...updateData.user, password: "" });
    }
    console.log(updateData);

  }, [updateData]);

  const renderError = (field, message) => {
    return <span className={styles.errorField}>{message}</span>;
  };

  const isValid = () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^.{6,}$/;
    const numberRegex = /^\d{10}$/; // Updated phone number regex
    const nameRegex = /^[A-Za-z\s?]{4,30}$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/; // Updated date of birth regex

    const isEmailValid = emailRegex.test(userDetails?.email);
    const isNumberValid = numberRegex.test(userDetails?.number);
    const isNameValid = nameRegex.test(userDetails?.name);
    const isPasswordValid =
      passwordRegex.test(userDetails?.password) && userDetails?.password !== "";
    const isConfirmPass =
      userDetails?.password === confirmPass && confirmPass !== "";
    const isDobValid = dobRegex.test(userDetails?.dob);

    setValidator({
      emailValid: isEmailValid,
      passwordValid: isPasswordValid,
      confirmPasswordValid: isConfirmPass,
      nameValid: isNameValid,
      numberValid: isNumberValid,
      dobValid: isDobValid,
    });

    return (
      isEmailValid &&
      isPasswordValid &&
      userDetails?.password === confirmPass &&
      isNameValid &&
      isNumberValid &&
      isDobValid
    );
  };

  const handleChangeUserDetails = (e) => {
    e.preventDefault();
    if (localStorage.getItem("user-info")) {
      const user = JSON.parse(localStorage.getItem("user-info"));
      if (isValid()) {
        const filteredUserDetails = {};

        for (let key in userDetails) {
          if (["name", "email", "number", "dob", "password"].includes(key)) {
            filteredUserDetails[key] = userDetails[key];
          }
        }
        console.log(filteredUserDetails)
        dispatch(updateUserData(user.id, filteredUserDetails));
        SetConfirmPass("");
        setValidator({
          numberValid: true,
          emailValid: true,
          nameValid: true,
          passwordValid: true,
          confirmPasswordValid: true,
          dobValid: true,
        });
      }
    }
  };

  return (
    <>
      <InnerNavbar showSearch={false} />
      <div className={styles.mainContainer}>
        <div className={styles.locationAndWelcome}>
          <div className={styles.location}>
            <span className={styles.routeName} style={{ opacity: 0.5 }}>
              Home /{" "}
            </span>
            <span className={styles.routeName}>
              {location.pathname === "/profile" ? "My Account" : ""}
            </span>
          </div>
          <div className={styles.welcome}>
            <span className={styles.welcomeText}>Welcome!</span>&nbsp;
            <span
              className={styles.welcomeText}
              style={{ color: "var(--Secondary-2, #DB4444)" }}
            >
              {name}
            </span>
          </div>
        </div>
        <div className={styles.manageAccount}>
          <p className={styles.editProfile}>Edit Your Profile</p>
          <div className={styles.nameAndEmail}>
            <div className={styles.name}>
              <label className={styles.labels}>Full Name</label>
              <input
                type="text"
                name="UserName"
                placeholder="Name"
                className={styles.input}
                value={userDetails?.name}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
              />
              {!validator.nameValid &&
                renderError(
                  "Name",
                  "Please enter a valid name (4-30 characters)"
                )}
            </div>
            <div className={styles.email}>
              <label className={styles.labels}>Email</label>
              <input
                type="text"
                name="UserEmail"
                placeholder="Email"
                className={styles.input}
                value={userDetails?.email}
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              />
              {!validator.emailValid &&
                renderError("Email", "Please enter a valid email address")}
            </div>
          </div>
          <div className={styles.passwordAndDob}>
            <div className="passconfoirmpass">
              <div className={styles.password}>
                <label className={styles.labels}>Password Changes</label>
                <input
                  type="password"
                  name="UserPassword"
                  placeholder="Password"
                  className={styles.input}
                  value={userDetails?.password}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                />
                {!validator.passwordValid &&
                  renderError(
                    "Password",
                    "Password must be at least 6 characters long"
                  )}
              </div>
              <div className={styles.password} style={{ marginTop: "1rem" }}>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  name="UserPassword"
                  className={styles.input}
                  value={confirmPass}
                  onChange={(e) => {
                    SetConfirmPass(e.target.value);
                  }}
                />
                {!validator.confirmPasswordValid &&
                  renderError(
                    "Confirm Password",
                    "Passwords do not match or are empty"
                  )}
              </div>
              <div className={styles.email} style={{ marginTop: "1rem" }}>
                <label className={styles.labels}>Phone Number</label>
                <input
                  type="text"
                  name="UserNumber"
                  placeholder="Number"
                  className={styles.input}
                  value={userDetails?.number}
                  onChange={(e) => {
                    setUserDetails({ ...userDetails, number: e.target.value });
                  }}
                />
                {!validator.numberValid &&
                  renderError(
                    "Phone Number",
                    "Please enter a valid 10-digit phone number"
                  )}
              </div>
            </div>
            <div className={styles.datePicker}>
              <label className={styles.labels}>Date Of Birth</label>
              <DatePicker
                placeholderText="Date of Birth"
                className={styles.input}
                selected={userDetails?.dob ? new Date(userDetails.dob) : null}
                onChange={(date) => {
                  if (date) {
                    const formattedDate = date
                      .toLocaleString("en", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/\//g, "-");
                    setUserDetails({ ...userDetails, dob: formattedDate });
                  }
                }}
                showYearDropdown
                yearDropdownItemNumber={10}
                dateFormat="yyyy-MM-dd"
              />
              {!validator.dobValid &&
                renderError(
                  "Date of Birth",
                  "Please enter a valid date of birth (yyyy-MM-dd)"
                )}
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cancelbutton}>
              <span className={styles.cancelText}>cancel</span>
            </button>
            <button
            tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleChangeUserDetails(e);
                }
              }}
              onClick={(e) => {
                handleChangeUserDetails(e);
              }}
              className={styles.saveButton}
            >
              <span className={styles.saveText}>Save Changes</span>
            </button>
          </div>
        </div>
        {userDetails?.admin ? <ProductAdd /> : <></>}
      </div>
    </>
  );
}
