import React from "react";
import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="main-container">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">Back to homepage</Link>
      </div>
    </>
  );
}
