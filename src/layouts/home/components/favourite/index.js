import React from "react";
import styles from "./Favourite.module.scss";
import Link from "next/link";

const Favourite = () => {
  return (
    <div className={styles.favourite}>
      <div className={styles.favTitle}>
        <h1>Here is People’s Favourite</h1>
        <p>
          Let’s choose and have a bit taste of poeple’s favorite. It might be
          yours too!
        </p>
      </div>
      <div className={`${styles.favContent} row`}>
        <div className={`${styles.favCard} col-md-4`}>
          <div className={styles.favImg}>
            <img src="images/img1.png" alt="" />
          </div>
          <div className={styles.favBox}>
            <div className={styles.favDetails}>
              <h2>Hazelnut Latte</h2>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Hazelnut Syrup
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Wanilla Whipped Cream
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Ice / Hot
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Sliced Banana on Top
              </div>
            </div>
            <div className={styles.favPrice}>IDR 25.000</div>
            <div className={styles.favButton}>
              <Link href="/#">
                <button>Order Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.favCard} col-md-4`}>
          <div className={styles.favImg}>
            <img
              src="images/img2.png"
              alt="Pinky Promise"
              title="Pinky Promise"
            />
          </div>
          <div className={styles.favBox}>
            <div className={styles.favDetails}>
              <h2>Pinky Promise</h2>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                1 Shot of Coffee
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Vanilla Whipped Cream
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Chocolate Biscuits
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Strawberry Syrup
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Sliced strawberry on Top
              </div>
            </div>
            <div className={styles.favPrice}>IDR 30.000</div>
            <div className={styles.favButton}>
              <button>Select</button>
            </div>
          </div>
        </div>
        <div className={`${styles.favCard} col-md-4`}>
          <div className={styles.favImg}>
            <img
              src="images/img3.png"
              alt="Chicken Wings"
              title="Chicken Wings"
            />
          </div>
          <div className={`${styles.favBox} ${styles.active}`}>
            <div className={styles.favDetails}>
              <h2>Chicken Wings</h2>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Wings
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Drum Sticks
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Mayonaise and Lemon
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Hot Fried
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Secret Recipe
              </div>
              <div className={styles.favDetailsInfo}>
                <span>
                  <img src="icon/check.svg" alt="" />
                </span>
                Buy 1 Get 1 only for Dine in
              </div>
            </div>
            <div className={styles.favPrice}>IDR 40.000</div>
            <div className={styles.favButton}>
              <button className={styles.active}>Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
