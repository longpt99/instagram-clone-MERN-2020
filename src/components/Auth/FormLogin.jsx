import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import FacebookLogin from "react-facebook-login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

FormLogin.propTypes = {
  handelLoginState: PropTypes.func
};

FormLogin.defaultProps = {
  handelLoginState: null
};

function FormLogin(props) {
  const [isFocus, setIsFocus] = useState(false);
  function componentClicked() {
    props.handelLoginState(true);
    console.log("clicked");
  }

  function responseFacebook(res) {
    console.log(res);
  }

  function handleFocus() {
    setIsFocus(true);
  }

  function handleOutFocus() {
    setIsFocus(false);
  }
  console.log(isFocus);
  return (
    <Form>
      <h1>Instagram</h1>
      <FormGroup>
        <Label>
          <Input
            type="email"
            name="email"
            onFocus={handleFocus}
            onBlur={handleOutFocus}
          />
          <span>Số điện thoại, tên người đùng, hoặc email</span>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          <Input type="password" name="password" />
          <span>Mật khẩu</span>
        </Label>
      </FormGroup>
      <Button color="primary">Đăng nhập</Button>
      <span className="form-text">HOẶC</span>
      <FacebookLogin
        appId="1419046874968768"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        textButton="Đăng nhập bằng Facebook"
      />
      <Link className="btn-reset-pw" to="/accounts/password/reset/">
        Quên mật khẩu?
      </Link>
    </Form>
  );
}

function areEqual(prevProps, nextProps) {
  return prevProps.handelLoginState !== nextProps.handelLoginState;
}

export default React.memo(FormLogin, areEqual);
