import React from "react";
import FacebookLogin from "react-facebook-login";

import './Facebook.scss'

Facebook.propTypes = {};

Facebook.defaultProps = {};

function Facebook(props) {
  const {registerForm} = props;

  function componentClicked() {
    props.handelLoginState(true);
    console.log("clicked");
  }

  function responseFacebook(res) {
    console.log(res);
  }

  return (
    <FacebookLogin
      appId="1419046874968768"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      cssClass={registerForm ? "my-facebook-button-class my-facebook-button-class--color" : "my-facebook-button-class"}
      icon="fa-facebook"
      textButton="Đăng nhập bằng Facebook"
    />
  );
}

export default Facebook;