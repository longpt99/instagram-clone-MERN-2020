import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LoginForm } from 'components/Auth';
import { checkValueToShowBtn } from 'utils';
import { actFetchTokenRequest, actResetErr, actUserLogout } from 'store/actions';
import { useEffect } from 'react';

function LoginContainer() {
  const error = useSelector(state => state.error);
  const token = useSelector(state => state.token.accessToken);
  const dispatch = useDispatch();

  const initInfo = {
    email: '',
    password: '',
  };
  const [showBtn, setShowBtn] = useState(false);
  const [hidePassword, setHidePassword] = useState(true)
  const [info, setInfo] = useState(initInfo);

  useEffect(() => {
      const resetErr = setTimeout(() => {
        dispatch(actResetErr())
      }, 5000)
      return () => {
        clearTimeout(resetErr)
      }
  }, [dispatch, error])

  useEffect(() => {
    if (!token) {
      dispatch(actUserLogout())
    }
  }, [dispatch, token])

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
    dispatch(actFetchTokenRequest(info))
  }

  function onHandleClickHidePassword() {
    setHidePassword(!hidePassword)
  }


  return (
    <LoginForm 
      error={error}
      showBtn={showBtn}
      info={info}
      hidePassword={hidePassword}
      onHandleSubmitForm={onHandleSubmitForm}
      onHandleClickHidePassword={onHandleClickHidePassword}
      onHandleValueInput={onHandleValueInput}
    />
  );
}

export default LoginContainer;