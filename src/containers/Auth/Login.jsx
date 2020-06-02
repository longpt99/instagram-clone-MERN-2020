import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';


import Login from '../../components/Auth/Login/Form';

import {actShowAuthPage} from '../../actions'


LoginContainer.propTypes = {
  
};

function LoginContainer(props) {
  const { onShowAuthPage, token } = props;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      console.log('count down', i);
      console.log('token', token)
      i++;
      onShowAuthPage();
    }, 2000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  if (token) {
    return <Redirect to='/'/>
  }

  return (
    <Login />
  );
}

const mapStateToProps = state => {
  return {
    authPage: state.authPage,
    token: state.token,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onShowAuthPage: () => {
      dispatch(actShowAuthPage());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);