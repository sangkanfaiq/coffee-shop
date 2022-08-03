import React from "react";
import Navbar from "./navbar";
import NavbarLogin from "./navbarLogin";
import { useSelector } from "react-redux";

const NavbarisLogin = () => {
  const { isLogin } = useSelector((s) => s.auth);
  console.log(isLogin)

  return (
    <>
        {isLogin ? <NavbarLogin />: <Navbar />}
    </>
  )
};

export default NavbarisLogin;
