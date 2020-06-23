import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import { ToggleForm } from 'components/Auth';
import { useDispatch } from 'react-redux';
import { actResetErr } from 'store/actions';

ToggleFormContainer.propTypes = {
  
};

function ToggleFormContainer(props) {
  const {url} = useRouteMatch();
  const [isLoginForm, setLoginForm] = useState(true);
  const dispatch = useDispatch();
  
  useState(() => {
    if (url.includes('login')) {
      setLoginForm(true)
    } else {
      setLoginForm(false)
    }
  }, []);

  function onHandleChangeForm() {
    setLoginForm(!isLoginForm)
    dispatch(actResetErr())
  }

  return <ToggleForm 
          onHandleChangeForm={onHandleChangeForm}
          isLoginForm={isLoginForm}
        />
}

export default ToggleFormContainer;