import React from "react";
import { Link } from 'react-router-dom';

import './styles.scss';

export default function ToogleForm({loginUrl}) {
  return (
    <div className='toggle-form'>
      <span>Bạn {loginUrl && 'không '}có tài khoản?</span>
      {
        loginUrl 
        ? <Link to='/register'>Đăng ký</Link>
        : <Link to='/login'>Đăng nhập</Link>
      }
    </div>
  );
}