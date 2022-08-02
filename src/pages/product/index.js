import React from 'react'
import Footer from '../../components/footer'
import NavbarLogin from '../../components/navbarLogin'
import ProductLayout from '../../layouts/product'
import Head from "next/head";

const Product = () => {
  return (
    <>
    <Head>
      <title>Product - Coffee Shop</title>
    </Head>
    <NavbarLogin />
    <ProductLayout />
    <Footer />
    </>
  )
}

export default Product