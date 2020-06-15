import React, {useState, useEffect} from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Link } from "react-router-dom";


import Facebook from '../../Facebook'

import './Login.scss';

Login.propTypes = {};

Login.defaultProps = {};


export default function Login(props) {
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
              value={info.email}
              onChange={props.onHandleValueInput}
              required
            />
            <span className='form-label__text'>Số điện thoại, tên người đùng, hoặc email</span>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              type={hidePassword ? "password" : 'text'}
              name="password"  
              value={info.password}
              onChange={props.onHandleValueInput}
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
