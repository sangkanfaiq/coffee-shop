import React from "react";
import NavbarLogin from "../../components/navbarLogin";
import ChatroomLayout from "../../layouts/chatroom";
import Head from 'next/head'

const Chatroom = () => {
  return (
    <>
      <Head>
        <title>Chatroom - Coffee Shop</title>
      </Head>
      <NavbarLogin />
      <ChatroomLayout />
    </>
  );
};

export default Chatroom;
