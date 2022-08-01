import React from "react";
import Footer from "../../../components/footer";
import Signuplayout from "../../../layouts/auth/signup";
import Head from 'next/head'

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up - Coffee Shop</title>
      </Head>
      <Signuplayout />
      <Footer />
    </>
  );
};

export default Signup;
