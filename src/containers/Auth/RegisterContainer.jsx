import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from '../../components/Auth/Register/Form';
import { actCreateNewAccount } from '../../store/actions';
import {checkValueToShowBtn} from '../../utils';

function RegisterContainer(props) {
  const initInfo = {
    name: '',
    email: '',
    nickname: '',
    password: '',
  };
  const [info, setInfo] = useState(initInfo);
  const [showBtn, setShowBtn] = useState(false);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  
  function handleValueInput(e) {
    const tempInfo = {...info}
    const {name, value} = e.target;
    tempInfo[name] = value;
    setInfo(tempInfo);
    const result = checkValueToShowBtn(tempInfo);
    setShowBtn(result)
  }
  
  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(actCreateNewAccount(info));
  }

  return (
    <RegisterForm 
      info={info}
      showBtn={showBtn}
      error={error}
      handleValueInput={handleValueInput}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

export default RegisterContainer;