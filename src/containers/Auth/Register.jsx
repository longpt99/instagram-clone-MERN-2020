import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RegisterForm from '../../components/Auth/Register/Form';
import { actCreateNewAccount } from '../../store/actions';

function RegisterContainer(props) {
  const {error, createAccount} = props;

  function onHandleInfo(data) {
    createAccount(data);
  }

  return (
    <RegisterForm onHandleInfo={onHandleInfo} error={error}/>
  );
}

const mapStateToProps = state => {
  return {
    error: state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAccount : (data) => {
      dispatch(actCreateNewAccount(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);