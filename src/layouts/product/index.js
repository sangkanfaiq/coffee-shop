import React from "react";
import ProductPromo from "./components/ProductPromo";
import styles from "./PLayout.module.scss";
import ProductList from "./components/ProductList";

const ProductLayout = ({data}) => {
  console.log(data, 'dari product layout')
  return (
    <>
      <div className={`${styles.productLayout} row`}>
        <div className={`${styles.PLLeft} col-md-4`}>
          <ProductPromo />
        </div>
        <div className={`${styles.PLRight} col-md-8`}>
          <ProductList data={data} />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
