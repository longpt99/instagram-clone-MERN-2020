import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./auth.css";

// Download.PropTypes = {};

// Download.defaultProps = {};

export default function Download(props) {
  const { img } = props;
  return (
    <div className="img-login">
      <img
        src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
        alt="wrap-img"
      />
      <img alt="img" src={img} />
    </div>
  );
}
