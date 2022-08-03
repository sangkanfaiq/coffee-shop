import React from 'react'
import Footer from '../../components/footer'
import ProductLayout from '../../layouts/product'
import Head from "next/head";
import NavbarisLogin from '../../components';

const Product = () => {
  return (
    <>
    <Head>
      <title>Product - Coffee Shop</title>
    </Head>
    <NavbarisLogin />
    <ProductLayout />
    <Footer />
    </>
  )
}

export default Product