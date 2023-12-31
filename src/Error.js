import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Error = ({ error }) => {
  return (
    <section className="error">
      <h2>{error}</h2>
      <Link to="/">
        <button className="error-button">Oops! Retry!</button>
      </Link>
    </section>
  );
};
export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired
}

