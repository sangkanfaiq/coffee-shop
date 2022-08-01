import React from 'react'
import Footer from '../../../components/footer'
import SigninLayout from '../../../layouts/auth/signin'
import Head from 'next/head'

const Signin = () => {
  return (
    <>
      <Head>
        <title>Sign In - Coffee Shop</title>
      </Head>
      <SigninLayout />
      <Footer />
    </>
  )
}

export default Signin