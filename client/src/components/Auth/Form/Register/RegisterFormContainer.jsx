import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkValueToShowBtn } from 'utils';
import { actCreateNewAccount, actResetErr } from 'store/actions';
import RegisterForm from './Register';

function RegisterFormContainer() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const initInfo = {
    name: '',
    email: '',
    nickname: '',
    password: '',
  };
  const [info, setInfo] = useState(initInfo);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const clearErrs = setTimeout(() => {
      dispatch(actResetErr());
    }, 3000);
    return () => {
      clearTimeout(clearErrs);
    };
  }, [dispatch, errors]);

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
    dispatch(actCreateNewAccount(data));
  }

  return (
    <RegisterForm
      info={info}
      showBtn={showBtn}
      errs={errors}
      handleValueInput={handleValueInput}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

export default RegisterFormContainer;
