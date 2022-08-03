import React from "react";
import styles from "./PDetails.module.scss";
import PDRight from "./components/PDRight";
import PDLeft from "./components/PDLeft";
import { ImArrowRight2 } from "react-icons/im";

const ProductDetailsLayout = ({id}) => {
  return (
    <div className="container">
      <div className={`${styles.pdLayout} row`}>
        <div className="col-md-5">
          <PDLeft/>
        </div>
        <div className="col-md-7">
          <PDRight/>
        </div>
      </div>
      <div className={`${styles.bottom} row`}>
        <div className="col-md-4">
          <div className={styles.chooseBox}>
            <h4>Choose a size</h4>
            <div className={styles.sizeCard}>
              <button>R</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className={styles.checkout}>
            <img src="images/img8.png" alt="" />
            <div className={styles.checkoutDetails}>
              <div className={styles.coInfo}>
                <h4>Cold Brew</h4>
                <p>XL (Extra Large)</p>
                <p>R (Regular)</p>
              </div>
              <div className={styles.co}>
                Check Out
                <div className={styles.coRound}>
                  <ImArrowRight2 className={styles.coIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLayout;
