import React, { useState } from "react";
import styles from "./BrowseField.module.css";
import ComputerSvg from "../../assets/computerSvg";
import MobileSvg from "../../assets/mobileSvg";
import { Watch, Headphone, Game } from "iconsax-react";
import { useProductContext } from "../../hooks/ProductContext";

export default function BrowseField({ fields }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { selectedType, setSelectedType } = useProductContext();

  const handleTypeClicked=(type)=>{
    setSelectedType(type);
    console.log(selectedType);
  }

  return (
    <>
      <div className={styles.root}>
        {fields.map((ele, ind) => (
          <div
            key={ind}
            onMouseEnter={() => setHoveredIndex(ind)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {ele.name === "Laptops" && (
              <div className={styles.container} onClick={()=>{handleTypeClicked('laptop')}}>
                <ComputerSvg color={hoveredIndex === ind ? "#fff" : "#000"} />
                <div>{ele.name}</div>
              </div>
            )}
            {ele.name === "Phones" && (
              <div className={styles.container} onClick={()=>{handleTypeClicked('mobile')}}>
                <MobileSvg color={hoveredIndex === ind ? "white" : "#000"} />
                <div>{ele.name}</div>
              </div>
            )}
            {ele.name === "SmartWatch" && (
              <div className={styles.container} onClick={()=>{handleTypeClicked('smartwatch')}}>
                <Watch
                  size={40}
                  strokeWidth={0.5}
                  variant="Linear"
                  className={styles.icon}
                />
                <div>{ele.name}</div>
              </div>
            )}
            {ele.name === "HeadPhones" && (
              <div className={styles.container} onClick={()=>{handleTypeClicked('headphone')}}>
                <Headphone
                  size={40}
                  strokeWidth={0.5}
                  variant="Linear"
                  className={styles.icon}
                />
                <div>{ele.name}</div>
              </div>
            )}
            {ele.name === "Gaming" && (
              <div className={styles.container} onClick={()=>{handleTypeClicked("gaming")}}>
                <Game
                  size={40}
                  strokeWidth={0.5}
                  variant="Linear"
                  className={styles.icon}
                />
                <div>{ele.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
