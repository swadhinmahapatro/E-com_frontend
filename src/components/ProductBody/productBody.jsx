import React, { useState } from "react";
import styles from "./productBody.module.css";
import { Heart } from "iconsax-react";
import { Eye } from "iconsax-react";
import Rating from "@mui/material/Rating";

export default function ProductBody({
  name,
  price,
  image,
  rating,
  numReviews,
  discount,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.root} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {discount && <div className={styles.discount}>{discount}</div>}
      <div className={styles.heartEyeContainer}>
        <div className="eye">
          <Heart size={20} color="#000" strokeWidth={0.5} variant="Linear" />
        </div>
      </div>
      <div className={styles.outerimage}>
        <div className={styles.imageContainer}>
          <img src={image} className={styles.productImage} alt="product" />
          <Eye size={20} color="#000" strokeWidth={0.5} variant="Linear" />
        </div>
      </div>
      <div className={styles.namePriceContainer}>
        <span className={styles.productname}>{name}</span>
        <span className={styles.price}>
          &#8377;{price}&nbsp;&nbsp;
          <del className={styles.oldPrice}>{1000}</del>{" "}
        </span>
      </div>
      <div className={styles.ratingNumReviews}>
        <div className={styles.rating}>
          <Rating name="read-only" value={rating} readOnly />
        </div>
        <span>({numReviews})</span>
      </div>
      {true && (
        <div className={styles.addToCart}>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      )}
    </div>
  );
}
