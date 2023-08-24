import React, { useEffect, useState } from "react";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import "./HomePage.style.css";
import { Link, useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/");
    }
  });

const [timeLeft, setTimeLeft] = useState({
  days: 4,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
const targetDate=new Date().getTime();

const startTimer = () => {
  const now = new Date().getTime();
  // targetDate = new Date(now + 4 * 24 * 60 * 60 * 1000);

  const timeDifference = targetDate - now;
  console.log(timeDifference);
  const days=Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  console.log(days);
  const seconds=Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  console.log(seconds);

  // const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  // const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  // const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  // const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  // setTimeLeft(prevState=>{
  //   console.log(prevState.days);
  //   console.log(prevState.hours);
  //   console.log(prevState.minutes);
  //   console.log(prevState.seconds);
  //   return {
  //     days,
  //     hours,
  //     minutes,
  //     seconds,
  //   }
  // });
  // console.log(days, hours, minutes, seconds,">>>>>");
  // console.log(timeLeft.days);
  // console.log(timeLeft.minutes); 
  // console.log(timeLeft.seconds); 
};

// useEffect(() => {
//   const interval = setInterval(() => {
//     startTimer();
//   }, 1000);

//   return () => {
//     clearInterval(interval);
//   };
// }, []);
startTimer();
  return (
    <>
      <InnerNavbar />
      <div className="optionsAndcursole">
        <div className="options">
          <Link className="links" to={"/home"}>
            Woman's Fashion
          </Link>
          <Link className="links" to={"/home"}>
            Man's Fashion{" "}
          </Link>
          <Link className="links" to={"/home"}>
            Kids Fashion
          </Link>
          <Link className="links" to={"/home"}>
            Electronics
          </Link>
          <Link className="links" to={"/home"}>
            Home & Living
          </Link>
          <Link className="links" to={"/home"}>
            Beauty & Health
          </Link>
        </div>
        <div className="cursole">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: First slide"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#777"></rect>
                  <text x="50%" y="50%" fill="#555" dy=".3em">
                    First slide
                  </text>
                </svg>
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Second slide"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#666"></rect>
                  <text x="50%" y="50%" fill="#444" dy=".3em">
                    Second slide
                  </text>
                </svg>
              </div>
              <div className="carousel-item" ata-bs-interval="1000">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                  width="800"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Third slide"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#555"></rect>
                  <text x="50%" y="50%" fill="#333" dy=".3em">
                    Third slide
                  </text>
                </svg>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <p>left</p>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <p>right</p>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="todays_deal">
          <div className="date">
            <div className="today">
              <p>Today's</p>
            </div>
            <div className="flashSales">
              <p>Flash Sales</p>
            </div>
          </div>
        </div>
        <div className="days">
          <div className="dayName">
            <p>Days</p>
            <p>Hours</p>
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
          <div className="time">
          <p>{timeLeft.days}:</p>
          <p>{timeLeft.hours}:</p>
          <p>{timeLeft.minutes}:</p>
          <p>{timeLeft.seconds}</p>
          </div>
          <div className="slider">
            <p>l</p>
            <p>r</p>
          </div>
        </div>
      </div>
    </>
  );
}
