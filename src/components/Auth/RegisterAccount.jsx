import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// RegisterAccount.PropTypes = {};

// RegisterAccount.defaultProps = {};

export default function RegisterAccount(props) {
  return (
    <div className="register form-login">
      <span>Bạn không có tài khoản?</span>
      <Link to="/accounts/signup">Đăng ký</Link>
    </div>
  );
}
