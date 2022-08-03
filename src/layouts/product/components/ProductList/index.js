import React, { useEffect, useState } from "react";
import styles from "./PList.module.scss";
import Link from "next/link";
import axios from "axios";

const ProductList = () => {
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
  );
};

export default ProductList;
