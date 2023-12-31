import React, { useState } from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "../helper/validate";
import convertBase64 from "../helper/convert";

export default function Profile() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      address: "",
    },
    validate: profileValidate,
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
      <div className="container">
        <div className="Upper-container">
          <h2>Profile</h2>
          <p style={{ textAlign: "center" }}>
            Update your personal information
          </p>
          <label className="profile_img" htmlFor="profile">
            <img src={file || avatar} alt="avatar" />
          </label>

          <input onChange={onUpload} type="file" id="profile" name="profile" />
          {/**login data check */}

          <form onSubmit={formik.handleSubmit}>
            <div className="profile-data">
              <div>
                <input
                  {...formik.getFieldProps("firstName")}
                  type="text"
                  placeholder="First Name"
                />

                <input
                  {...formik.getFieldProps("lastName")}
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <input
                  {...formik.getFieldProps("mobileNumber")}
                  type="number"
                  placeholder="Mobile Number"
                />

                <input
                  {...formik.getFieldProps("email")}
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  {...formik.getFieldProps("address")}
                  type="text"
                  placeholder="Address"
                />
              </div>
            </div>

            <button type="submit" className="btn">
              Update
            </button>

            <div className="login-register">
              <p>
                Already Updated?{" "}
                <Link to="/" className="register-link">
                  LogOut
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
