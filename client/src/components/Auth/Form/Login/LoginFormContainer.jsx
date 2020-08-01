import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkValueToShowBtn } from 'utils';
import {
  actFetchTokenRequest,
  actResetErr,
  actUserLogout,
} from 'store/actions';
import LoginForm from './Login';

function LoginFormContainer() {
  const errors = useSelector((state) => state.errors);
  const token = useSelector((state) => state.token.accessToken);

  const dispatch = useDispatch();

  const initInfo = {
    email: '',
    password: '',
  };

  const [showBtn, setShowBtn] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [info, setInfo] = useState(initInfo);

  useEffect(() => {
    const resetErr = setTimeout(() => {
      dispatch(actResetErr());
    }, 5000);
    return () => {
      clearTimeout(resetErr);
    };
  }, [dispatch, errors]);

  useEffect(() => {
    if (!token) {
      dispatch(actUserLogout());
    }
  }, [dispatch, token]);

  function handleValueInput(e) {
    const tempInfo = { ...info };
    const { name, value } = e.target;
    tempInfo[name] = value;
    setInfo(tempInfo);
    const result = checkValueToShowBtn(tempInfo);
    setShowBtn(result);
  }

  function handleSubmitForm(data, e) {
    e.preventDefault();
    dispatch(actFetchTokenRequest(data));
  }

  function handleClickHidePassword() {
    setHidePassword(!hidePassword);
  }

  return (
    <LoginForm
      errs={errors}
      showBtn={showBtn}
      info={info}
      hidePassword={hidePassword}
      handleSubmitForm={handleSubmitForm}
      handleClickHidePassword={handleClickHidePassword}
      handleValueInput={handleValueInput}
    />
  );
}

export default LoginFormContainer;
