import React from "react";
import "../styles/Username.css";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { accountValidate } from "../helper/validate";
import { passwordValidate } from "../helper/validate";

export default function Username() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: passwordValidate,
    validate: accountValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {" "}
      {/**toast notification */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            color: "#fff",
            background: "#333",
          },
        }}
      ></Toaster>
      {/** body*/}
      <div className="wrapper">
        <div className="form-box login">
          <h2>Login</h2>
          <img src={avatar} alt="" />

          {/**login data check */}

          <form onSubmit={formik.handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input {...formik.getFieldProps("username")} />
              <label for="">username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input {...formik.getFieldProps("password")} type="password" />
              <label for="">Password</label>
            </div>

            <div className="remember">
              <label for="">
                <input type="checkbox" />
                Remember me
              </label>
              <Link className="forgotPassword" to="/recovery">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <div className="login-register">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="register-link">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
