import React, { useEffect, useState } from "react";
import styles from "./Signin.module.scss";
import Link from "next/link";
import { AuthLogin } from "../../../redux/actions/Auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const SigninLayout = () => {
  let router = useRouter();
  const dispatch = useDispatch();
  const { error, loading, isLogin } = useSelector((state) => state.auth);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(AuthLogin(formLogin));
  };

  useEffect(() => {
    if (isLogin === true) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500,
        width: "20em",
        height: "5em",
      });
      setTimeout(() => {
        router.replace("/");
      }, 1600);
    } else {
      router.push("/auth/signin");
    }
  }, [isLogin]);

  return (
    <>
      <div className={`${styles.signinLayout} row`}>
        <div className={`${styles.leftSI} col-md-6`}>
          <div className={styles.bgTransparent}></div>
        </div>
        <div className={`${styles.rightSI} col-md-6`}>
          <div className={styles.rightBoxSI}>
            <div className={styles.logo}>
              <Link href="/">
                <div className={styles.logoImg}>
                  <img src="/logo/coffee.svg" alt="logo" title="Coffee" />
                  <h1>Coffee Shop</h1>
                </div>
              </Link>
              <div className={styles.logoButton}>
                <Link href="/auth/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
            <h2>Sign In</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="">Email Address</label>
              <br />
              <input
                name="email"
                type="text"
                placeholder="Enter your email address"
                required
                onChange={(e) => {
                  setFormLogin((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }));
                }}
              />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                required
                onChange={(e) => {
                  setFormLogin((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }));
                }}
              />
              <br />
              <div className={styles.forgotPass}>
                <Link href="/auth/forgotpassword">Forgot Password?</Link>
              </div>
              {loading ? (
                <button className="btn btn-primary" disabled={true}>
                  Loading...
                </button>
              ) : (
                <button>Sign In</button>
              )}
              {error && (
                <div className="text-center mt-3" style={{ color: "red" }}>
                  {error.message}
                </div>
              )}
              <br />
              <div className={styles.withGoogle}>
                <span>
                  <img src="/icon/google.svg" alt="google" title="Google" />
                </span>
                Sign in with Google
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninLayout;
