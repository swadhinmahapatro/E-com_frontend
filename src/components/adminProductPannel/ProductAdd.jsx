import React, { useState } from "react";
import styles from "./ProductAdd.module.css";
import { TextareaAutosize } from "@mui/material";
export default function ProductAdd() {
  const [ProductDetails, setProductDetails] = useState({
    name: "",
    price: "",
    file: null,
    description: "",
    type: "",
  });

  return (
    <>
      <div className={styles.mainCOntainer}>
        <p className={styles.addproductText}>Add Product</p>
        <div className={styles.addProduct}>
          <div className={styles.productNAme}>
            <label className={styles.label}>Product Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className={styles.productPrice}>
            <label className={styles.label}>Product Price</label>
            <input
              className={styles.input}
              type="number"
              placeholder="Price"
            />
          </div>
          <div className={styles.productDesc}>
            <label className={styles.label}>Product desciption</label>
            <textarea
              style={{padding:"1rem"}}
              className={styles.input}
              type="text"
              placeholder="desciption"
            />
          </div>
          <div className={styles.productfile}>
            <label className={styles.label}>Product desciption</label>
            <input
              className={styles.input}
              type="file"
              placeholder="select File"

              onChange={(event) => {
                const selectedFile = event.target.files[0];
                setProductDetails({ ...ProductDetails, file: selectedFile });
              }}
            />
          </div>
          <div className={styles.productType}>
            <label className={styles.label}>Product Type</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Product Type"
            />
          </div>
        </div> <div className={styles.buttons}>
            <button className={styles.cancelbutton}>
              <span className={styles.cancelText}>cancel</span>
            </button>
            <button className={styles.saveButton}>
              <span className={styles.saveText}>Add</span>
            </button>
          </div>
      </div>
    </>
  );
}
