import React from "react";
import Footer from "../../components/footer";
import NavbarLogin from "../../components/navbarLogin";
import ProductDetailsLayout from "../../layouts/ProductDetails";
import Head from 'next/head'

const ProductDetails = () => {
  return (
    <>
      <Head>
        <title>Product Details - Coffee Shop</title>
      </Head>
      <NavbarLogin />
      <ProductDetailsLayout />
      <Footer />
    </>
  );
};

export default ProductDetails;
