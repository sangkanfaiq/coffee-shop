import React from "react";
import Footer from "../../components/footer";
import ProductDetailsLayout from "../../layouts/ProductDetails";
import Head from 'next/head'
import NavbarisLogin from "../../components";

const ProductDetails = ({data}) => {
  
  return (
    <>
      <Head>
        <title>Product Details - Coffee Shop</title>
      </Head>
      <NavbarisLogin />
      <ProductDetailsLayout data={data}/>
      <Footer />
      
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3069/api/v1/products/${context.params.id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default ProductDetails;

