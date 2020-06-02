import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import Facebook from '../../Facebook'

Login.propTypes = {};

Login.defaultProps = {};

export default function Login(props) {
  function componentClicked() {
    props.handelLoginState(true);
    console.log("clicked");
  }

  function responseFacebook(res) {
    console.log(res);
  }

  return (
    <Col>
      <Form>
        <h1>Instagram</h1>
        <FormGroup>
          <Label>
            <Input
              type="email"
              name="email"
              // onFocus={handleFocus}
              // onBlur={handleOutFocus}
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
        <Facebook />
        <Link className="btn-reset-pw" to="/accounts/password/reset/">
          Quên mật khẩu?
        </Link>
      </Form>
    </Col>
  );
}
