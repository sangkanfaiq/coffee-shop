import React, { useEffect, useState } from "react";
import styles from "./PDRight.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from "axios";

const PDRight = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3069/api/v1/products",
    })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {product.map((product, index) => {
        return (
          <div className={styles.pdRight} key={index}>
            <h1>{product.name}</h1>
            <div className={styles.pdTitle}>
              <h4>{product.description}</h4>
              <p>
                Delivery only on <span>Monday to friday </span>at{" "}
                <span>1 - 7 pm</span>
              </p>
            </div>
            <div className={styles.quantityBox}>
              <div className={styles.quantiSquare}>
                <button onClick={() => setCount((prevState) => prevState - 1)}>
                  <AiOutlineMinus className={styles.squareIcon} />
                </button>
                <div className={styles.square}>{count}</div>
                <button onClick={() => setCount((prevState) => prevState + 1)}>
                  <AiOutlinePlus className={styles.squareIcon} />
                </button>
              </div>
              <div className={styles.quantiPrice}>IDR {product.price}</div>
            </div>
            <div className={styles.btnAdd}>
              <button className={styles.cart}>Add to Cart</button>
              <button className={styles.staff}>Ask a Staff</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PDRight;
