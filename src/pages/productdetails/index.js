import React from "react";
import Footer from "../../components/footer";
import ProductDetailsLayout from "../../layouts/ProductDetails";
import Head from 'next/head'
import NavbarisLogin from "../../components";

const ProductDetails = () => {
  return (
    <>
      <Head>
        <title>Product Details - Coffee Shop</title>
      </Head>
      <NavbarisLogin />
      <ProductDetailsLayout />
      <Footer />
    </>
  );
};

export default ProductDetails;
