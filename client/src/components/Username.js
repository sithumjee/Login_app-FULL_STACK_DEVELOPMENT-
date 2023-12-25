import React from "react";
import "../styles/Username.css";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";

export default function Username() {
  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <img src={avatar} alt="" />
        <form action="">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input type="email" required />
            <label for="">email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input type="password" required />
            <label for="">Password</label>
          </div>

          <div className="remember">
            <label for="">
              <input type="checkbox" />
              Remember me
            </label>
            <Link className="forgotPassword" to="/password">
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
  );
}
