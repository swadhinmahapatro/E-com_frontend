import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import {
  getUserData,
  resetUserDataFetch,
} from "../../redux/actions/profileAction";
import ProductAdd from "../../components/adminProductPannel/ProductAdd";
export default function ProfilePage() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState();
  const profileData = useSelector((state) => state.profile.userData);
  const location = useLocation();

  const UpdatedData = useEffect(() => {
    if (localStorage.getItem("user-info")) {
      const user = JSON.parse(localStorage.getItem("user-info"));
      dispatch(getUserData(user.id));
    }
  }, []);
  useEffect(() => {
    if (profileData) {
      setUserDetails(profileData.user);
    }
  }, [profileData]);

  useEffect(() => {
    return () => {
      dispatch(resetUserDataFetch());
    };
  }, [dispatch]);

  useEffect(() => {
    console.log(userDetails);
  });

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
              {userDetails?.name}
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
              </div>
              <div className={styles.Conpassword} style={{ marginTop: "1rem" }}>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  name="UserPassword"
                  className={styles.input}
                  value={userDetails?.password}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className={styles.datePicker}>
              <label className={styles.labels}>Date Of Birth</label>
              <DatePicker
                placeholderText="Date of Birth"
                className={styles.input}
                selected={
                  userDetails?.dob ? new Date(userDetails.dob) : new Date()
                }
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
                yearDropdownItemNumber={8}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.cancelbutton}>
              <span className={styles.cancelText}>cancel</span>
            </button>
            <button className={styles.saveButton}>
              <span className={styles.saveText}>Save Changes</span>
            </button>
          </div>
        </div>
        {userDetails?.admin? <ProductAdd />:<></>}
      </div>
    </>
  );
}
