import React from "react";
import "../styles/recovery.css";
import { Link } from "react-router-dom";

export default function Recovery() {
  return (
    <>
      {/** body*/}
      <div className="section">
        <div className="form-box login">
          <h2>Recovery</h2>
          <p className="headerP">Enter the OTP to recover your account</p>

          {/**login data check */}

          <form>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input />
              <label for="">OTP</label>
            </div>

            <div className="remember">
              <p className="otpP">
                Enter the 6 digit OTP sent to your mobile number
              </p>
            </div>

            <button type="submit" className="btn">
              Recover
            </button>

            <div className="login-register">
              <p>
                Can't get the OTP? <button>resend</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
