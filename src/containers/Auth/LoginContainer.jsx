import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {checkValueToShowBtn} from '../../utils';
import LoginForm from '../../components/Auth/Login/Form';
import { actFetchTokenRequest } from '../../store/actions';

LoginContainer.propTypes = {
  
};

function LoginContainer(props) {
  const error = useSelector(state => state.error)
  const dispatch = useDispatch();

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