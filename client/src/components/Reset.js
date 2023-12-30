import React from "react";
import "../styles/Username.css";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetValidate } from "../helper/validate";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confPs: "",
    },
    validate: resetValidate,
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
      <div className="wrapper" style={{ height: "400px" }}>
        <div className="form-box login">
          <h2>Reset</h2>
          <p style={{ fontSize: "14px", paddingLeft: "80px" }}>
            Enter your new password
          </p>

          {/**login data check */}

          <form onSubmit={formik.handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input {...formik.getFieldProps("password")} type="password" />
              <label for="">Password</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input {...formik.getFieldProps("confPs")} type="password" />
              <label for="">Confirm Password</label>
            </div>

            <button type="submit" className="btn">
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
