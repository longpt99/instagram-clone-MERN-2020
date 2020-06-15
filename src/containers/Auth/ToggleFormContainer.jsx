import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AuthToggleForm from '../../components/Auth/ToggleForm';
import { useRouteMatch } from 'react-router-dom';

ToggleFormContainer.propTypes = {
  
};

function ToggleFormContainer(props) {
  const {url} = useRouteMatch();
  const [isLoginForm, setLoginForm] = useState(true);
  console.log(url)

  useState(() => {
    if (url.includes('login')) {
      setLoginForm(true)
    } else {
      setLoginForm(false)
    }
  }, []);

  function onHandleChangeForm() {
    setLoginForm(!isLoginForm)
  }

  return <AuthToggleForm 
          onHandleChangeForm={onHandleChangeForm}
          isLoginForm={isLoginForm}
        />
}

export default ToggleFormContainer;