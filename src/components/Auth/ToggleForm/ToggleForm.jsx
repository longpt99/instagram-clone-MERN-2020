import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './ToggleForm.scss';

export default function ToogleForm(props) {
  const {isLoginForm} = props;
  
  return (
    <div className='toggle-form'>
      <span>Bạn {isLoginForm && 'không '}có tài khoản?</span>
      {
        isLoginForm
        ? <Link to='/register' onClick={props.onHandleChangeForm}>Đăng ký</Link>
        : <Link to='/login' onClick={props.onHandleChangeForm}>Đăng nhập</Link>
      }
    </div>
  );
}