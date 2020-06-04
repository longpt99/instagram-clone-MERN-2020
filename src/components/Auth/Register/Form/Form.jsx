import React, {useState} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {checkValueToShowBtn} from '../../../../utils';

import Facebook from '../../Facebook';
import './Register.scss';

export default function Register(props) {
  const initInfo = {
    name: '',
    email: '',
    nickname: '',
    password: '',
  };
  const [info, setInfo] = useState(initInfo);
  const [showBtn, setShowBtn] = useState(false);

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
  
  return (
    <div className='login-form'>
      <Form onSubmit={onHandleSubmitForm}>
        <h1>Instagram</h1>
        <Facebook registerForm={true}/>
        <span className="form-text">HOẶC</span>
        <FormGroup>
          <Label>
            <Input
              required
              type="text"
              name="email"
              value={info.email}
              onChange={onHandleValueInput}
            />
            <span className='form-label__text'>Số di động hoặc email</span>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              required
              type="text" 
              name="name"  
              value={info.name}
              onChange={onHandleValueInput}
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
              onChange={onHandleValueInput}
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
              onChange={onHandleValueInput}
            />
            <span className='form-label__text'>Mật khẩu</span>
          </Label>
        </FormGroup>
        <Button color="primary" disabled={showBtn ? false : true }>Đăng ký</Button>
      </Form>
    </div>
  );
}
