import React, { useEffect, useState } from "react";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import styles from "./HomePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.style.css";
import ProductBody from "../../components/ProductBody/productBody";
import { SidebarLeft } from "iconsax-react";
import { SidebarRight } from "iconsax-react";
import { ArrowLeft2 } from "iconsax-react";
import { ArrowRight2 } from "iconsax-react";
import BrowseField from "../../components/BrowseFIeld/BrowseField";

export default function HomePage() {
  const navigate = useNavigate();
  const [product, setProducts] = useState([
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 60,
      discount: "40%",
    },
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 50,
      discount: "40%",
    },
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 40,
      discount: "40%",
    },
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 30,
      discount: "40%",
    },
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 20,
      discount: "40%",
    },
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 10,
      discount: "40%",
    },
    {
      name: "havit hv-g92 Gamepad",
      price: 100,
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      rating: 4,
      numReviews: 5,
      discount: "40%",
    },
  ]);
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/");
    }
  });
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4; // Number of products per page
  const totalPages = Math.ceil(product.length / productsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + timeLeft.hours);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate.getTime() - now;

    if (timeDifference <= 0) {
      setTimeLeft({
        hours: 4,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const hours = Math.floor(timeDifference / (60 * 60 * 1000));
      const minutes = Math.floor(
        (timeDifference % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
      setTimeLeft({
        hours,
        minutes,
        seconds,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Display the timeLeft in your UI
  console.log(timeLeft.hours);
  console.log(timeLeft.minutes);
  console.log(timeLeft.seconds);

  return (
    <>
      <InnerNavbar />
      <div className={styles.root}>
        <div className={styles.optionsAndcursole}>
          <div className={styles.options}>
            <Link className={styles.links} to={"/home"}>
              Woman's Fashion
            </Link>
            <Link className={styles.links} to={"/home"}>
              Man's Fashion{" "}
            </Link>
            <Link className={styles.links} to={"/home"}>
              Kids Fashion
            </Link>
            <Link className={styles.links} to={"/home"}>
              Electronics
            </Link>
            <Link className={styles.links} to={"/home"}>
              Home & Living
            </Link>
            <Link className={styles.links} to={"/home"}>
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
                <ArrowLeft2
                  size={24}
                  color="#000"
                  strokeWidth={0.5}
                  variant="Linear"
                />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <ArrowRight2
                  size={24}
                  color="#000"
                  strokeWidth={0.5}
                  variant="Linear"
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.todays_deal}>
            <div className={styles.date}>
              <div className={styles.today}>
                <p className={styles.todaytext}>Today's</p>
              </div>
              <div className={styles.flashSales}>
                <p className={styles.flashtext}>Flash Sales</p>
              </div>
            </div>
          </div>
          <div className={styles.days}>
            <div className={styles.dayName}>
              <div className={styles.dayinner}>
                <p className={styles.timeheadText}>Days</p>
                <p className={styles.timeheadText}>Hours</p>
                <p className={styles.timeheadText}>Minutes</p>
                <p className={styles.timeheadText}>Seconds</p>
              </div>
              <div className={styles.time}>
                <span className={styles.timebodyText}>3:</span>
                <span className={styles.timebodyText}>{timeLeft.hours}:</span>
                <span className={styles.timebodyText}>{timeLeft.minutes}:</span>
                <span className={styles.timebodyText}>{timeLeft.seconds}</span>
              </div>
            </div>
            <div className={styles.slider}>
              <SidebarLeft
                onClick={handlePrevious}
                color="#000000"
                strokeWidth={0.5}
                size={24}
                variant="Linear"
              />
              <SidebarRight
                onClick={handleNext}
                color="#000000"
                strokeWidth={0.5}
                size={24}
                variant="Linear"
              />
            </div>
          </div>
        </div>
        <div className={styles.products}>
          {product
            .slice(
              currentPage * productsPerPage,
              (currentPage + 1) * productsPerPage
            )
            .map((ele, ind, product) => {
              return (
                <ProductBody
                  key={ind}
                  name={ele.name}
                  price={ele.price}
                  image={ele.image}
                  rating={ele.rating}
                  numReviews={ele.numReviews}
                  discount={ele.discount}
                />
              );
            })}
        </div>
        <div className={styles.catagories}>
          <div className={styles.todaytext}>catagories</div>
          <div className={styles.flashtext}>
            <span>Browse By Catagories</span>
          </div>
          <BrowseField totalField={5} fields={[{ name: "Phones"},{ name: "Laptops"},{ name: "Smart Watches"},{ name: "Gaming"},{ name: "Headphones"}]}/>
        </div>
      </div>
    </>
  );
}
