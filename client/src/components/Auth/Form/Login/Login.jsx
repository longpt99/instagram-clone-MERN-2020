import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { Button, Alert } from 'reactstrap';
import './styles.scss';
import { Facebook } from 'components';

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function LoginForm(props) {
  const { errs, hidePassword, showBtn } = props;
  const { register, handleSubmit, errors, clearErrors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const clearErrs = setTimeout(() => {
      clearErrors(['email', 'password']);
    }, 3000);
    return () => {
      clearTimeout(clearErrs);
    };
  }, [clearErrors, errors]);

  return (
    <div className="c-form">
      <form
        className="c-form__container"
        onSubmit={handleSubmit(props.handleSubmitForm)}
      >
        <h1>Instagram</h1>
        <label className="c-form__item">
          <input
            className="c-form__input"
            type="text"
            name="email"
            autoComplete="username"
            onChange={props.handleValueInput}
            ref={register}
            required
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
            className="c-form__input"
            type={hidePassword ? 'password' : 'text'}
            name="password"
            onChange={props.handleValueInput}
            autoComplete="current-password"
            ref={register}
            required
          />
          <span className="c-form__text">Mật khẩu</span>
          <ion-icon
            class="c-button__eyes"
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            onClick={props.handleClickHidePassword}
          />
        </label>
        {(errors.password || errs.password) && (
          <Alert color="danger">
            {errs.password ? errs.password.msg : errors.password.message}
          </Alert>
        )}
        <Button className="c-button--w" color="primary" disabled={!showBtn}>
          Đăng nhập
        </Button>
        <span className="c-form__textItem">HOẶC</span>
        <Facebook registerForm={false} />
        <Link className="c-form__resetPassword" to="/accounts/password/reset">
          Quên mật khẩu?
        </Link>
      </form>
    </div>
  );
}
