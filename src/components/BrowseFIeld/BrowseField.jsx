import React from "react";
import styles from "./BrowseField.module.css";
import ComputerSvg from "../../assets/computerSvg";
import MobileSvg from "../../assets/mobileSvg";
import { Watch, Headphone, Game } from "iconsax-react";

export default function BrowseField({ fields }) {
  return (
    <>
      {fields.map((ele, ind) => (
        <div key={ind} className={styles.root}>
          <div className={styles.image}>
            {ele.name === "Laptops" && (
              <div>
                <ComputerSvg />
                <div>{ele.name}</div>
              </div>
            )}
            {ele.name === "Phones" && (
              <div>
                <MobileSvg />
                <div></div>
              </div>
            )}
            {ele.name === "Smart Watches" && (
              <div>
                <Watch
                  size={40}
                  color="#000"
                  strokeWidth={0.5}
                  variant="Linear"
                />
              </div>
            )}
            {ele.name === "Headphones" && (
              <Headphone
                size={40}
                color="#000"
                strokeWidth={0.5}
                variant="Linear"
              />
            )}
            {ele.name === "Gaming" && (
              <Game size={40} color="#000" strokeWidth={0.5} variant="Linear" />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
