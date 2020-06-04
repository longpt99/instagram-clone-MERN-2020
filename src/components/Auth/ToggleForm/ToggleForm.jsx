import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './ToggleForm.scss';

export default function ToogleForm(props) {
  const [loginForm, setLoginForm] = useState(true);

  useState(() => {
    const pathname = (window.location.pathname);
    if (pathname.includes('login') || pathname === '/') {
      setLoginForm(true)
    } else {
      setLoginForm(false)
    }
  }, []);

  console.log(window.location.pathname)

  function onHandleChangeForm() {
    setLoginForm(!loginForm)
  }
  
  return (
    <div className='toggle-form'>
      <span>Bạn {loginForm && 'không '}có tài khoản?</span>
      {
        loginForm
        ? <Link to='/register' onClick={onHandleChangeForm}>Đăng ký</Link>
        : <Link to='/login' onClick={onHandleChangeForm}>Đăng nhập</Link>
      }
    </div>
  );
}