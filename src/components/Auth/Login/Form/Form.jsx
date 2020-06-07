import React, {useState} from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Link } from "react-router-dom";

import {checkValueToShowBtn} from '../../../../utils';

import Facebook from '../../Facebook'

import './Login.scss';

Login.propTypes = {};

Login.defaultProps = {};


export default function Login(props) {
  const {error} = props;
  const initInfo = {
    email: '',
    password: '',
  };
  const [showBtn, setShowBtn] = useState(false);
  const [hidePassword, setHidePassword] = useState(true)
  const [info, setInfo] = useState(initInfo);


  function onHandleValueInput(e) {
    const tempInfo = {...info}
    const {name, value} = e.target;
    tempInfo[name] = value;
    setInfo(tempInfo);
    const result = checkValueToShowBtn(tempInfo);
    setShowBtn(result)
  }

  function onHandleSubmitForm(e) {
    e.preventDefault();
    props.onHandleInfo(info);
  }

  function onHandleHidePassword() {
    setHidePassword(!hidePassword)
  }

  return (
    <div className='login-form'>
      <Form onSubmit={onHandleSubmitForm}>
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
              onChange={onHandleValueInput}
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
              onChange={onHandleValueInput}
              required
            />
            <span className='form-label__text'>Mật khẩu</span>
          </Label>
          <ion-icon name={hidePassword ? "eye-outline" : "eye-off-outline"} onClick={onHandleHidePassword}></ion-icon>
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
