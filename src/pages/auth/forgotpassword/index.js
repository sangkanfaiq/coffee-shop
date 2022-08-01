import React from "react";
import Footer from "../../../components/footer";
import ForgotLayout from "../../../layouts/auth/forgot";
import Head from "next/head";

const Forgot = () => {
  return (
    <>
      <Head>
        <title>Forgot Password - Coffee Shop</title>
      </Head>
      <ForgotLayout />
      <Footer />
    </>
  );
};

export default Forgot;
