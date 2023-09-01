import React, { useEffect } from "react";
import styles from "./AboutPage.module.css";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import { useLocation } from "react-router-dom";
import QualityFrames from "../../components/QualityFrames/QualityFrames";
import Footer from '../../components/footer/footer';

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  return (
    <>
      <InnerNavbar />
      <div className={styles.routePhase}>
        <span className={styles.routeName} style={{ opacity: 0.5 }}>
          Home /{" "}
        </span>
        <span className={styles.routeName}>
          {location.pathname === "/about" ? "About" : ""}
        </span>
        <div className={styles.imageCon}>
          <div>
            <h1 className={styles.ourStory}>
              <strong>Our Story</strong>
            </h1>
            <p className={styles.aboutContent}>
              Launced in 2023, Exclusive is India's premier online shopping
              makterplace with an active presense in Bhubneshwar. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className={styles.aboutContent}>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1694390400&Signature=mzvieBr4yun6Oq5EVninq55K0HtbcsHAnQlQd5Q5STQ9tRSg~RnGCVudnFCS1NqWoOq26YgLqzZOi8lo833IOQ6Q0MAbhww9nucE2W9k~HGV8Rwu53i3~vGSbpOd388bzgGS-tapgx75lAfBJiAUoDIB30dNG0JWns9zdjuKXEHlxxGwFzyh7koE7QFaADkjB9AI~CoTJg94J9DGQPhCNXsPAoexpV9iQuFDm7B5~o-zSNWMvYgsVZb8dNP48TXM7TH4ZgRU83sqPywc0LIOUytiuPmMahOKlF80dbyqGGAs3uTtchFcj07fck95B3ax33-3zwCJUhHLml5cGFvxYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            className={styles.firstImage}
            alt=""
            srcset=""
          />
        </div>
        <QualityFrames />
        
      </div>
      <Footer/>
    </>
  );
}
