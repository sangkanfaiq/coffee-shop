import styles from "./Signup.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AuthRegister } from "../../../redux/actions/Register";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Signuplayout = () => {
  const dispatch = useDispatch();
  const { error, loading, isRegister } = useSelector((state) => state.register);
  const [register, setRegister] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(AuthRegister(register));
  };

  let router = useRouter();

  useEffect(() => {
    if (isRegister) {
      router.push("/auth/signin");
    } else {
      router.push("/auth/signup");
    }
  }, [isRegister]);

  return (
    <div className={`${styles.signupLayout} row`}>
      <div className={`${styles.leftSU} col-md-6`}>
        <div className={styles.bgTransparent}></div>
      </div>
      <div className={`${styles.rightSU} col-md-6`}>
        <div className={styles.rightBoxSU}>
          <div className={styles.logo}>
            <Link href="/">
              <div className={styles.logoImg}>
                <img src="/logo/coffee.svg" alt="logo" title="Coffee" />
                <h1>Coffee Shop</h1>
              </div>
            </Link>
            <div className={styles.logoButton}>
              <Link href="/auth/signin">
                <button>Sign In</button>
              </Link>
            </div>
          </div>
          <h2>Sign Up</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="">Email Address</label>
            <br />
            <input
              type="text"
              placeholder="Enter your email address"
              required
              onChange={(e) => {
                setRegister((prevData) => ({
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
                setRegister((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
            />
            <br />
            <label htmlFor="">Phone number</label>
            <br />
            <input
              placeholder="Enter your phone number"
              required
              onChange={(e) => {
                setRegister((prevData) => ({
                  ...prevData,
                  phone: e.target.value,
                }));
              }}
            />
            <br />
            {loading ? (
              <button className="btn btn-primary" disabled={true}>
                Loading...
              </button>
            ) : (
              <button onSubmit={handleRegister}>Sign Up</button>
            )}
            {error && (
                <div className="text-center mt-4" style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>
                  {error.message}
                </div>
              )}
            <br />
            <div className={styles.withGoogle}>
              <span>
                <img src="/icon/google.svg" alt="google" />
              </span>
              Sign up with Google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuplayout;
