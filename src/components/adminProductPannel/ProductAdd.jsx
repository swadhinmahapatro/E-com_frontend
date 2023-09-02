import React, { useState, useEffect } from "react";
import styles from "./ProductAdd.module.css";
import CustomToast from "../toast/toast";
import axios from '../../interceptor/interceptor';
export default function ProductAdd() {
  const [ProductDetails, setProductDetails] = useState({
    name: "",
    price: "",
    file: null,
    description: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      ProductDetails.name === "" ||
      ProductDetails.price === "" ||
      ProductDetails.file === null ||
      ProductDetails.description === "" ||
      ProductDetails.type === ""
    ) {
      CustomToast({ type: "error", message: "Please fill all the fields" });
      console.log(ProductDetails.description);
      console.log(ProductDetails.type);
      console.log(ProductDetails.file);
      console.log(ProductDetails.name);
      console.log(ProductDetails.price);
      return;
    } else {
      const formData = new FormData();
      formData.append("name", ProductDetails.name);
      formData.append("price", ProductDetails.price);
      formData.append("type", ProductDetails.type);
      formData.append("description", ProductDetails.description);
      formData.append("file", ProductDetails.file);
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
      axios.post("/addproduct", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        if (res.status === 200) {
          CustomToast({ type: "success", message: res.data.message });
        }
        console.log(res.data);
      })
    }
  }

  return (
    <>
      <div className={styles.mainCOntainer}>
        <p className={styles.addproductText}>Add Product</p>
        <div className={styles.addProduct}>
          <div className={styles.productNAme}>
            <label className={styles.label}>Product Name</label>
            <input className={styles.input}
              type="text"
              placeholder="Name"
              value={ProductDetails.name}
              onChange={(e) => {
                setProductDetails({ ...ProductDetails, name: e.target.value })
              }}
            />
          </div>
          <div className={styles.productPrice}>
            <label className={styles.label}>Product Price</label>
            <input className={styles.input}
              type="number"
              placeholder="Price"
              value={ProductDetails.price}
              onChange={(e) => {
                setProductDetails({ ...ProductDetails, price: e.target.value })
              }}
            />
          </div>
          <div className={styles.productDesc}>
            <label className={styles.label}>Product desciption</label>
            <textarea
              style={{ padding: "1rem" }}
              className={styles.input}
              type="text"
              placeholder="desciption"
              value={ProductDetails.description}
              onChange={(e) => {
                setProductDetails({ ...ProductDetails, description: e.target.value })
              }}
            />
          </div>
          <div className={styles.productfile}>
            <label className={styles.label}>Product desciption</label>
            <input
              className={styles.input}
              type="file"
              name="file" // Add the name attribute
              placeholder="select File"
              accept=".jpg, .png, .webp"
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
              value={ProductDetails.type}
              onChange={(e) => {
                setProductDetails({ ...ProductDetails, type: e.target.value })
              }}
            />
          </div>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.cancelbutton}>
            <span className={styles.cancelText}>cancel</span>
          </button>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className={styles.saveButton}
          >
            <span className={styles.saveText}>Add</span>
          </button>
        </div>
      </div>
    </>
  );
}