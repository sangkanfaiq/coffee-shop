import React from "react";
import styles from "./PList.module.scss";
import Link from 'next/link'

const ProductList = () => {
  return (
    <div className={styles.productList}>
      <div className={styles.listMenu}>
        <div className={styles.menuCard}>
          <img src="products/veggie-tomato-mix.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Veggie tomato mix</h2>
            <div className={styles.cardPrice}>
              <p>IDR 34.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/hazelnut-latte.png" alt="" />
          <Link href='/productdetails'>
            <div className={styles.cardBorder}>
              <h2>Hazelnut Latte</h2>
              <div className={styles.cardPrice}>
                <p>IDR 25.000</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.menuCard}>
          <img src="products/summer-fried-rice.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Summer fried rice</h2>
            <div className={styles.cardPrice}>
              <p>IDR 32.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/creamy-latte.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Creamy Ice Latte</h2>
            <div className={styles.cardPrice}>
              <p>IDR 27.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/drum-stick.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Drum Sticks</h2>
            <div className={styles.cardPrice}>
              <p>IDR 30.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/salty-rice.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Salty Rice</h2>
            <div className={styles.cardPrice}>
              <p>IDR 20.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/summer-fried-rice.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Summer fried rice</h2>
            <div className={styles.cardPrice}>
              <p>IDR 32.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/creamy-latte.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Creamy Ice Latte</h2>
            <div className={styles.cardPrice}>
              <p>IDR 27.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/drum-stick.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Drum Sticks</h2>
            <div className={styles.cardPrice}>
              <p>IDR 30.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/salty-rice.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Salty Rice</h2>
            <div className={styles.cardPrice}>
              <p>IDR 20.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/summer-fried-rice.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Summer fried rice</h2>
            <div className={styles.cardPrice}>
              <p>IDR 32.000</p>
            </div>
          </div>
        </div>
        <div className={styles.menuCard}>
          <img src="products/creamy-latte.png" alt="" />
          <div className={styles.cardBorder}>
            <h2>Creamy Ice Latte</h2>
            <div className={styles.cardPrice}>
              <p>IDR 27.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
