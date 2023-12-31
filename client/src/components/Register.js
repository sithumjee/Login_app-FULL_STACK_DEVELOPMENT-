import React, { useState } from "react";
import "../styles/Username.css";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { accountValidate } from "../helper/validate";
import { registerValidate } from "../helper/validate";
import convertBase64 from "../helper/convert";

export default function Register() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  /**Formik doesnt support file formats */

  const onUpload = async (e) => {
    const base64 = await convertBase64(e.target.files[0]);
    setFile(base64);
  };

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
      <div className="wrapper" style={{ height: "100%" }}>
        <div className="form-box login">
          <h2>Register</h2>
          <p style={{ paddingLeft: "30px" }}>
            Explore more by registering with us
          </p>
          <label className="profile_img" htmlFor="profile">
            <img src={file || avatar} alt="avatar" />
          </label>

          <input onChange={onUpload} type="file" id="profile" name="profile" />
          {/**login data check */}

          <form onSubmit={formik.handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input {...formik.getFieldProps("email")} type="text" />
              <label for="">Email</label>
            </div>

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

            <button type="submit" className="btn">
              Register
            </button>

            <div className="login-register">
              <p>
                Already registered?{" "}
                <Link to="/" className="register-link">
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
