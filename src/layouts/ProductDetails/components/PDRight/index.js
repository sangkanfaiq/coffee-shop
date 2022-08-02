import React from "react";
import styles from "./PDRight.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const PDRight = () => {
  return (
    <div className={styles.pdRight}>
      <h1>Cold Brew</h1>
      <div className={styles.pdTitle}>
        <h4>
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </h4>
        <p>
          Delivery only on <span>Monday to friday </span>at{" "}
          <span>1 - 7 pm</span>
        </p>
      </div>
      <div className={styles.quantityBox}>
        <div className={styles.quantiSquare}>
          <button>
            <AiOutlineMinus className={styles.squareIcon} />
          </button>
          <div className={styles.square}>2</div>
          <button>
            <AiOutlinePlus className={styles.squareIcon} />
          </button>
        </div>
        <div className={styles.quantiPrice}>IDR 30.000</div>
      </div>
      <div className={styles.btnAdd}>
        <button className={styles.cart}>Add to Cart</button>
        <button className={styles.staff}>Ask a Staff</button>
      </div>
    </div>
  );
};

export default PDRight;
