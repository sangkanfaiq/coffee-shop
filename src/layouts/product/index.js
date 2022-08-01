import React from "react";
import ProductDetails from "./components/ProductDetails";
import ProductMenu from "./components/ProductMenu";
import ProductPromo from "./components/ProductPromo";
import styles from "./PLayout.module.scss";
import Head from 'next/head'

const ProductLayout = () => {
  return (
    <>
      <Head>
        <title>Product - Coffee Shop</title>
      </Head>
      <div className={`${styles.productLayout} row`}>
        <div className={`${styles.PLLeft} col-md-4`}>
          <ProductPromo />
        </div>
        <div className={`${styles.PLRight} col-md-8`}>
          <ProductMenu />
          <ProductDetails />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
