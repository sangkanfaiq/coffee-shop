import React from "react";
import styles from "./PPromo.module.scss";

const ProductPromo = () => {
  return (
    <div className={styles.productPromo}>
      <div className={styles.promoTitle}>
        <h1>Promo for you</h1>
        <p>Coupons will be updated every weeks. Check them out!</p>
      </div>
      <div className={styles.promoBox}>
        <div className={styles.promoCard1}>
          <div className={styles.promoDetails}>
            <img src="/products/beef-spaghetti.png" alt="images" />
            <h2>Beef Spaghetti</h2>
            <h3>20% OFF</h3>
            <h4>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</h4>
          </div>
          <div className={styles.dashed}></div>
          <div className={styles.couponCode}>
            <h4>COUPON CODE</h4>
            <h1>FNPR15RG</h1>
            <h3>Valid untill October 10th 2020</h3>
          </div>
        </div>
        <div className={styles.promoCard2}></div>
        <div className={styles.promoCard3}></div>
      </div>
      <div className={styles.applyCoup}>
        <button>Apply Coupon</button>
      </div>
      <div className={styles.termCondition}>
        <h4>Terms and Condition</h4>
        <p><span>1. </span>You can only apply 1 coupon per day</p>
        <p><span>2. </span>It only for dine in</p>
        <p><span>3. </span>Buy 1 get 1 only for new user</p>
        <p><span>4. </span>Should make member card to apply coupon</p>
      </div>
    </div>
  );
};

export default ProductPromo;
