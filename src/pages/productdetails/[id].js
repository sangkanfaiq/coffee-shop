import React from "react";
import Footer from "../../components/footer";
import ProductDetailsLayout from "../../layouts/ProductDetails";
import Head from 'next/head'
import NavbarisLogin from "../../components";

const ProductDetails = ({id}) => {
  console.log(id)
  
  return (
    <>
      <Head>
        <title>Product Details - Co`ffee Shop</title>
      </Head>
      <NavbarisLogin />
      <ProductDetailsLayout id={id}/>
      <Footer />
      
    </>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.params

  return {
      props: { id }
  }
}

export default ProductDetails;

