import React from "react";
import styles from "./QualityFrames.module.css";
import { Shop, DollarCircle, Headphone, WalletMoney,Car,I24Support,MoneyRecive } from "iconsax-react";
import ceo from "../../assets/images/ceo.png";
import magangingDirctor from "../../assets/images/manaingDirector.png";
import ProductManager from "../../assets/images/productManager.png";
export default function QualityFrames() {
  return (
    <>
      <div className={styles.qualityFrames}>
        <div className={styles.frames}>
          <div className={styles.icon}>
            <Shop size={26} color="#fff" />
          </div>
          <div className="about">
            <div>
              <p className={styles.rating}>10.5k</p>
            </div>
            <div>
              <span className={styles.desc}>sallers active in our site</span>
            </div>
          </div>
        </div>
        <div className={styles.frames}>
          <div className={styles.icon}>
            <DollarCircle size={26} color="#fff" />
          </div>
          <div className="about">
            <div>
              <p className={styles.rating}>10.5k</p>
            </div>
            <div>
              <span className={styles.desc}>sallers active in our site</span>
            </div>
          </div>
        </div>
        <div className={styles.frames}>
          <div className={styles.icon}>
            <Headphone size={26} color="#fff" />
          </div>
          <div className="about">
            <div>
              <p className={styles.rating}>33k</p>
            </div>
            <div>
              <span className={styles.desc}>sallers active in our site</span>
            </div>
          </div>
        </div>
        <div className={styles.frames}>
          <div className={styles.icon}>
            <WalletMoney size={26} color="#fff" />
          </div>
          <div className="about">
            <div>
              <p className={styles.rating}>45.5k</p>
            </div>
            <div>
              <span className={styles.desc}>Customer active in our site</span>
            </div>
          </div>
        </div>
        <div className={styles.frames}>
          <div className={styles.icon}>
            <Shop size={26} color="#fff" />
          </div>
          <div className="about">
            <div>
              <p className={styles.rating}>25k</p>
            </div>
            <div>
              <span className={styles.desc}>Anual gross sale in our site</span>
            </div>
          </div>
        </div>
      </div>
      <div className="founders">
        <div className={styles.imageCont}>
          <div className={styles.innercont}>
            <img src={ceo} alt="ceo" className={styles.image} />
            <div className="details">
              <p className={styles.name}>Swadhin Mahapatro</p>
              <p className={styles.position}>Founder & chairman</p>
              <div className="social"></div>
            </div>
          </div>
          <div className={styles.innercont}>
            <img src={magangingDirctor} className={styles.image} alt="Owner" />
            <div className="details">
              <p className={styles.name}>Elizabeth olsen</p>
              <p className={styles.position}>Managing Director</p>
              <div className="social"></div>
            </div>
          </div>
          <div className={styles.innercont}>
            <img src={ProductManager} alt="Director" className={styles.image} />
            <div className="details">
              <p className={styles.name}>Thomash Shellby</p>
              <p className={styles.position}>Product Manaager & Owner</p>
              <div className="social"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servies}>
        <div className={styles.iconCont}>
          <div className={styles.icon}>
            <Car size={26} color="#fff" />
          </div>
          <div className={styles.serviceDes}>
            <p className={styles.seriveceHead}>Free and Fast Delivery</p>
            <p className={styles.servicedesc}>Free delivery for all orders over 500</p>
          </div>
        </div>
        <div className={styles.iconCont}>
          <div className={styles.icon}>
            <I24Support size={26} color="#fff" />
          </div>
          <div className={styles.serviceDes}>
            <p className={styles.seriveceHead}>MONEY BACK GUARANTEE</p>
            <p className={styles.servicedesc}>We return money within 30 days</p>
          </div>
        </div>

        <div className={styles.iconCont}>
          <div className={styles.icon}>
            <MoneyRecive size={26} color="#fff" />
          </div>
          <div className={styles.serviceDes}>
            <p className={styles.seriveceHead}>MONEY BACK GUARANTEE</p>
            <p className={styles.servicedesc}>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}
