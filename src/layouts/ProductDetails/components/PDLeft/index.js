import React from "react";
import styles from './PDLeft.module.scss'
import { FiChevronsRight } from "react-icons/fi";

const PDLeft = () => {
  
  return (
    <div className={styles.pdLeft}>
      {}
      <div className={styles.pdDirection}>
        Favourite & Promo <FiChevronsRight />
        <span> Cold Brew</span>
      </div>
      <div className={styles.pdImg}>
        <img src="images/img8.png" alt="Cold Brew" title="Cold Brew" />
      </div>
      <div className={styles.deliveryBox}>
        <div className={styles.deliveryTime}>
          <h4>Delivery and Time</h4>
          <div className={styles.deliveryOption}>
            <button className={styles.active}>Dine In</button>
            <button>Door Delivery</button>
            <button>Pick up</button>
          </div>
        </div>
        <div className={styles.deliveryStatus}>
          Now
          <div className={styles.statusOption}>
            <button className={styles.active}>Yes</button>
            <button>No</button>
          </div>
        </div>
        <div className={styles.setTime}>
          Set Time
          <input type="text" placeholder="Enter time for reservation" />
        </div>
      </div>
      
    </div>
  );
};

export default PDLeft;
