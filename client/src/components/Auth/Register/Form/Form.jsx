import React from "react";
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

import {Facebook} from 'components/Auth';
import './Register.scss';

RegisterForm.propTypes = {
  error: PropTypes.bool,
  showBtn: PropTypes.bool,
  info: PropTypes.object,
  handleSubmitForm: PropTypes.func,
  handleValueInput: PropTypes.func,
}

export default function RegisterForm(props) {
  const {error, showBtn, info} = props;
  
  return (
    <div className='login-form'>
      <Form onSubmit={props.handleSubmitForm}>
        <h1>Instagram</h1>
        <Facebook registerForm={true}/>
        <span className="form-text">HOẶC</span>
        {
          error && <Alert color="danger">
          {error}
        </Alert>
        }
        <FormGroup>
          <Label>
            <Input
              required
              type="text"
              name="email"
              value={info.email}
              onChange={props.handleValueInput}
            />
            <span className='form-label__text'>Email</span>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              required
              type="text" 
              name="name"  
              value={info.name}
              onChange={props.handleValueInput}
            />
            <span className='form-label__text'>Tên đầy đủ</span>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              required
              type="text" 
              name="nickname"  
              value={info.nickname}
              onChange={props.handleValueInput}
            />
            <span className='form-label__text'>Tên người dùng</span>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              required
              type="password" 
              name="password"  
              value={info.password}
              onChange={props.handleValueInput}
            />
            <span className='form-label__text'>Mật khẩu</span>
          </Label>
        </FormGroup>
        <Button color="primary" disabled={showBtn ? false : true }>Đăng ký</Button>
      </Form>
    </div>
  );
}
