import React from "react";
import { Link } from "react-router-dom";
const Error = ({ error }) => {
  return (
    <section className="error">
      <h2>{error}</h2>
      <Link to="/">
        <button className="error-button">Retry</button>
      </Link>
    </section>
  );
};
export default Error;
