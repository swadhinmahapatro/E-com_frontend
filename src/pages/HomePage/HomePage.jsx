import React, { useEffect, useState } from "react";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import styles from "./HomePage.module.css";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.style.css";
import ProductBody from "../../components/ProductBody/productBody";
import Skeleton from "react-loading-skeleton";
import {
  SidebarLeft,
  Apple,
  SidebarRight,
  ArrowLeft2,
  ArrowRight2,
} from "iconsax-react";
import BrowseField from "../../components/BrowseFIeld/BrowseField";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetProductFetch } from "../../redux/actions/productAction";
import { useProductContext } from "../../hooks/ProductContext";
import { width } from "@mui/system";
import { resetProductState } from "../../redux/reducers/productReducer";
import { resetUserDataFetch } from "../../redux/actions/profileAction";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const ProductData = useSelector((state) => state.product.products);
  const [product, setProducts] = useState([]);
  const { selectedType } = useProductContext();
  const [previousSelectedType, setPreviousSelectedType] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
    setPreviousSelectedType(selectedType);
  }, []);

  useEffect(() => {
    if (ProductData) {
      setProducts(ProductData);
      // resetProductState();
    }
  }, [ProductData]);
  
  useEffect(() => {
    return () => {
      dispatch(resetProductFetch());
    };
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3; // Number of products per page
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
  const [viewPreoducts, SetViewProducts] = React.useState({
    type: false,
    by: "",
  });

  useEffect(() => {
    console.log(selectedType, "selec");
    console.log(previousSelectedType, "prev");
    SetViewProducts({ ...viewPreoducts, by: "" });
  }, [selectedType]);

  // Display the timeLeft in your UI

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
                  <div className={styles.cursoleItemOuter}>
                    <div className={styles.firstPhase}>
                      <div className={styles.productName}>
                        <Apple size={42} color="#ffff" variant="Bold" />&nbsp;
                        <span className={styles.productNameText}>iPhone 14 Series</span>
                      </div>
                      <div className={styles.discountPhase}>
                        <p className={styles.discountText}>Up to 10% off Voucher</p>
                      </div>
                      <button className={styles.shopNowButton}>
                        <span className={styles.shopNowText}>Shop Now</span>
                        <ArrowRight2
                          size={24}
                          color="#fff"
                          strokeWidth={0.5}
                          variant="Linear"
                        />
                      </button>
                    </div>
                    <div className={styles.ImagePhase}>
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvhl4p19gdc9UQ5t3s0oR1aBgRZN-6mfUwmJ_vQwv&s"
                        }
                        alt="iphone"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                  <div className={styles.cursoleItemOuter}>
                    <div className={styles.firstPhase}>
                      <div className={styles.productName}>
                        <Apple size={42} color="#ffff" variant="Bold" />&nbsp;
                        <span className={styles.productNameText}>iPhone 14 Series</span>
                      </div>
                      <div className={styles.discountPhase}>
                        <p className={styles.discountText}>Up to 10% off Voucher</p>
                      </div>
                      <button className={styles.shopNowButton}>
                        <span className={styles.shopNowText}>Shop Now</span>
                        <ArrowRight2
                          size={24}
                          color="#fff"
                          strokeWidth={0.5}
                          variant="Linear"
                        />
                      </button>
                    </div>
                    <div className={styles.ImagePhase}>
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvhl4p19gdc9UQ5t3s0oR1aBgRZN-6mfUwmJ_vQwv&s"
                        }
                        alt="iphone"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item" ata-bs-interval="1000">
                  <div className={styles.cursoleItemOuter}>
                    <div className={styles.firstPhase}>
                      <div className={styles.productName}>
                        <Apple size={42} color="#ffff" variant="Bold" />&nbsp;
                        <span className={styles.productNameText}>iPhone 14 Series</span>
                      </div>
                      <div className={styles.discountPhase}>
                        <p className={styles.discountText}>Up to 10% off Voucher</p>
                      </div>
                      <button className={styles.shopNowButton}>
                        <span className={styles.shopNowText}>Shop Now</span>
                        <ArrowRight2
                          size={24}
                          color="#fff"
                          strokeWidth={0.5}
                          variant="Linear"
                        />
                      </button>
                    </div>
                    <div className={styles.ImagePhase}>
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvhl4p19gdc9UQ5t3s0oR1aBgRZN-6mfUwmJ_vQwv&s"
                        }
                        alt="iphone"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >

              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >

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
                  image={ele.image_url}
                  rating={ele.rating}
                  numReviews={ele.numReviews}
                  discount={ele.discount}
                />
              );
            })}
        </div>
        <div className={styles.catagories}>
          <div className={styles.todaytext}>
            <p>catagories</p>
          </div>
          <div className={styles.flashtext}>
            <span>Browse By Catagories</span>
          </div>
          <BrowseField
            totalField={5}
            fields={[
              { name: "Phones" },
              { name: "Laptops" },
              { name: "SmartWatch" },
              { name: "Gaming" },
              { name: "HeadPhones" },
            ]}
          />
        </div>

        {selectedType && (
          <div className={styles.catagories}>
            <div className={styles.todaytext}>
              <p>
                {selectedType === "smartwatch"
                  ? `${selectedType}es`
                  : `${selectedType}s`}
              </p>
            </div>
            <div className={styles.bestcatg}>
              <div className={styles.flashtext}>
                <span>Selcted Catagory</span>
              </div>
              {previousSelectedType !== selectedType && (
                <div>
                  <button
                    className={styles.viewMore}
                    onClick={() => {
                      SetViewProducts({ ...viewPreoducts, by: "selected" });
                      setPreviousSelectedType(selectedType);
                    }}
                  >
                    View More
                  </button>
                </div>
              )}
            </div>
            <div className={styles.products}>
              {product
                .filter((ele) => ele.type === selectedType)
                .slice(0, viewPreoducts.by === "selected" ? product?.length : 3)
                .map((ele, ind) => {
                  return (
                    <ProductBody
                      key={ind}
                      name={ele.name}
                      price={ele.price}
                      image={ele.image_url}
                      rating={ele.rating}
                      numReviews={ele.numReviews}
                    />
                  );
                })}
            </div>
          </div>
        )}
        <div className={styles.catagories}>
          <div className={styles.todaytext}>
            <p>This Month</p>
          </div>
          <div className={styles.bestcatg}>
            <div className={styles.flashtext}>
              <span>Best Selling Products</span>
            </div>
            {!viewPreoducts.type && (
              <div>
                <button
                  className={styles.viewMore}
                  onClick={() => {
                    SetViewProducts({
                      ...viewPreoducts,
                      type: true,
                    });
                  }}
                >
                  View More
                </button>
              </div>
            )}
          </div>

          <div className={styles.products}>
            {product
              .slice(0, viewPreoducts.type ? product?.length : 4)
              .map((ele, ind) => {
                return (
                  <ProductBody
                    key={ind}
                    name={ele.name}
                    price={ele.price}
                    image={ele.image_url}
                    rating={ele.rating}
                    numReviews={ele.numReviews}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
