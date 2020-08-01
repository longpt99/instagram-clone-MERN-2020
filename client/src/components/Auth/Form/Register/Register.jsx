import React from 'react';
import PropTypes from 'prop-types';
import { Button, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { useEffect } from 'react';
import '../Login/styles.scss';
import { Facebook } from 'components';

RegisterForm.propTypes = {
  errs: PropTypes.object,
  showBtn: PropTypes.bool,
  info: PropTypes.object,
  handleSubmitForm: PropTypes.func,
  handleValueInput: PropTypes.func,
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  nickname: yup.string().required(),
  password: yup.string().min(8).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], "Password's not match")
    .required('Required!'),
});

export default function RegisterForm(props) {
  const { errs, showBtn } = props;
  const { register, handleSubmit, errors, clearErrors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const clearErrs = setTimeout(() => {
      clearErrors([
        'email',
        'name',
        'nickname',
        'password',
        'confirm_password',
      ]);
    }, 3000);
    console.log(1);
    return () => {
      clearTimeout(clearErrs);
    };
  }, [clearErrors, errs]);

  return (
    <div className="c-form">
      <form onSubmit={handleSubmit(props.handleSubmitForm)}>
        <h1>Instagram</h1>
        <Facebook registerForm={true} />
        <span className="c-form__textItem">HOẶC</span>
        <label className="c-form__item">
          <input
            ref={register}
            className="c-form__input"
            required
            type="text"
            name="email"
            onChange={props.handleValueInput}
          />
          <span className="c-form__text">Email</span>
        </label>
        {(errors.email || errs.email) && (
          <Alert color="danger">
            {errs.email ? errs.email.msg : errors.email.message}
          </Alert>
        )}
        <label className="c-form__item">
          <input
            ref={register}
            className="c-form__input"
            required
            type="text"
            name="name"
            onChange={props.handleValueInput}
          />
          <span className="c-form__text">Tên đầy đủ</span>
        </label>
        {errors.name && <Alert color="danger">{errors.password.message}</Alert>}
        <label className="c-form__item">
          <input
            ref={register}
            className="c-form__input"
            required
            type="text"
            name="nickname"
            onChange={props.handleValueInput}
          />
          <span className="c-form__text">Tên người dùng</span>
        </label>
        {(errors.nickname || errs.nickname) && (
          <Alert color="danger">
            {errs.nickname ? errs.nickname.msg : errors.nickname.message}
          </Alert>
        )}
        <label className="c-form__item">
          <input
            ref={register}
            className="c-form__input"
            required
            type="password"
            name="password"
            onChange={props.handleValueInput}
          />
          <span className="c-form__text">Mật khẩu</span>
        </label>
        {errors.password && (
          <Alert color="danger">{errors.password.message}</Alert>
        )}
        <label className="c-form__item">
          <input
            ref={register}
            className="c-form__input"
            required
            type="password"
            name="confirm_password"
            onChange={props.handleValueInput}
          />
          <span className="c-form__text">Nhập lại mật khẩu</span>
        </label>
        {errors.confirm_password && (
          <Alert color="danger">{errors.confirm_password.message}</Alert>
        )}
        <Button
          className="c-button--w"
          color="primary"
          disabled={showBtn ? false : true}
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
}
