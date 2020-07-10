import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RegisterForm } from 'components/Auth';
import { checkValueToShowBtn } from 'utils';
import { actCreateNewAccount, actResetErr } from 'store/actions';

function RegisterContainer() {
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

  useEffect(() => {
    const resetErr = setTimeout(() => {
      dispatch(actResetErr())
    }, 5000)
    return () => {
      clearTimeout(resetErr)
    }
  }, [dispatch, error])

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