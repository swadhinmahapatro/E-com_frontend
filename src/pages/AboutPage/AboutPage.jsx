import React, { useEffect } from "react";
import styles from "./AboutPage.module.css";
import InnerNavbar from "../../components/innerNavbar/innerNavbar";
import { useLocation } from "react-router-dom";
export default function AboutPage() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);
  return (
    <>
      <InnerNavbar />
      <div className={styles.routePhase}>
        <span>Home /  <span>{location.pathname === "/about" ? "About" : ""}</span></span>
       
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1694390400&Signature=mzvieBr4yun6Oq5EVninq55K0HtbcsHAnQlQd5Q5STQ9tRSg~RnGCVudnFCS1NqWoOq26YgLqzZOi8lo833IOQ6Q0MAbhww9nucE2W9k~HGV8Rwu53i3~vGSbpOd388bzgGS-tapgx75lAfBJiAUoDIB30dNG0JWns9zdjuKXEHlxxGwFzyh7koE7QFaADkjB9AI~CoTJg94J9DGQPhCNXsPAoexpV9iQuFDm7B5~o-zSNWMvYgsVZb8dNP48TXM7TH4ZgRU83sqPywc0LIOUytiuPmMahOKlF80dbyqGGAs3uTtchFcj07fck95B3ax33-3zwCJUhHLml5cGFvxYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          width={500}
          height={340}
          alt=""
          srcset=""
        />
      </div>
    </>
  );
}
