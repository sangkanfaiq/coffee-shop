import React, { useState } from "react";
import styles from "./PDetails.module.scss";
import { ImArrowRight2 } from "react-icons/im";
import { FiChevronsRight } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductDetailsLayout = ({ data }) => {

  const product = data.data[0]
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div className={`${styles.pdLayout} row`}>
        <div className="col-md-5">
          <div className={styles.pdLeft}>
            <div className={styles.pdDirection}>
              Favourite & Promo <FiChevronsRight />
              <span> {product.name}</span>
            </div>
            <div className={styles.pdImg}>
              <img src={`http://localhost:3069/uploads/products/${product.cover}`} alt="Cold Brew" title="Cold Brew" />
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
        </div>
        <div className="col-md-7">
          <div className={styles.pdRight}>
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
                <div className={styles.quantiPrice}>Rp {product.price}</div>
              </div>
              <div className={styles.btnAdd}>
                <button className={styles.cart}>Add to Cart</button>
                <button className={styles.staff}>Ask a Staff</button>
              </div>
          </div>
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
            <img src={`http://localhost:3069/uploads/products/${product.cover}`} alt="" />
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
