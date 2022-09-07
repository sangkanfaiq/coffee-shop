import React from "react";
import styles from "./PList.module.scss";
import Link from "next/link";

const ProductList = ({data}) => {
  const product = data.data

  return (
    <>
      <div className={styles.productMenu}>
          <div className={styles.menuDetails}>
              <Link href='/#'><div className={`${styles.menuItem} ${styles.active}`}>Favorite Product</div></Link>
              <Link href='/#'><div className={styles.menuItem}>Coffee</div></Link>
              <Link href='/#'><div className={styles.menuItem}>Non Coffee</div></Link>
              <Link href='/#'><div className={styles.menuItem}>Foods</div></Link>
              <Link href='/#'><div className={styles.menuItem}>Add-on</div></Link>
          </div>
      </div>
      <div className={styles.productList}>
        <div className={styles.listMenu}>
          {product.map((product, index) => {
            return (
              <>
                <div className={styles.menuCard} key={index}>
                  <img
                    src={`http://localhost:3069/uploads/products/${product.cover}`}
                    alt={product.name}
                  />
                  <Link href={`/productdetails/${product.product_id}`}>
                    <div className={styles.cardBorder}>
                      <h2>{product.name}</h2>
                      <div className={styles.cardPrice}>
                        <p>IDR {product.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
