import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Link } from "react-router-dom";

import './Login.scss';
import {Facebook} from "components/Auth";

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default function LoginForm(props) {
  const {error, info, hidePassword, showBtn} = props;

  return (
    <div className='login-form'>
      <Form onSubmit={props.onHandleSubmitForm}>
        <h1>Instagram</h1>
        {
          error && <Alert color="danger">
          {error}
        </Alert>
        }
        <FormGroup>
          <Label>
            <Input
              type="text"
              name="email"
              autoComplete='username'
              value={info.email}
              onChange={props.onHandleValueInput}
              required
            />
            <span className='form-label__text'>Email</span>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              type={hidePassword ? "password" : 'text'}
              name="password"  
              value={info.password}
              onChange={props.onHandleValueInput}
              autoComplete="current-password"
              required
            />
            <span className='form-label__text'>Mật khẩu</span>
          </Label>
          <ion-icon name={hidePassword ? "eye-outline" : "eye-off-outline"} onClick={props.onHandleClickHidePassword}></ion-icon>
        </FormGroup>
        <Button color="primary" disabled={showBtn ? false : true }>Đăng nhập</Button>
        <span className="form-text">HOẶC</span>
        <Facebook registerForm={false}/>
        <Link className="btn-reset-pw" to="/account/password/reset/">
          Quên mật khẩu?
        </Link>
      </Form>
    </div>
  );
}