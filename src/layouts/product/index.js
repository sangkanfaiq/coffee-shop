import React from "react";
import ProductMenu from "./components/ProductMenu";
import ProductPromo from "./components/ProductPromo";
import styles from "./PLayout.module.scss";
import ProductList from "./components/ProductList";

const ProductLayout = () => {
  return (
    <>
      <div className={`${styles.productLayout} row`}>
        <div className={`${styles.PLLeft} col-md-4`}>
          <ProductPromo />
        </div>
        <div className={`${styles.PLRight} col-md-8`}>
          <ProductMenu />
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
