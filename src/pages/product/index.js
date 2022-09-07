import React from 'react'
import Footer from '../../components/footer'
import ProductLayout from '../../layouts/product'
import Head from "next/head";
import NavbarisLogin from '../../components';

const Product = ({data}) => {
  console.log(data, 'dari product')
  return (
    <>
    <Head>
      <title>Product - Coffee Shop</title>
    </Head>
    <NavbarisLogin />
    <ProductLayout data={data}/>
    <Footer />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3069/api/v1/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Product