import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Register from '../../components/Auth/Register/Form';
import { actCreateNewAccount } from '../../store/actions';

Register.propTypes = {
  
};

function RegisterContainer(props) {
  const {error, createAccount} = props;

  function onHandleInfo(data) {
    createAccount(data);
  }

  return (
    <Register onHandleInfo={onHandleInfo} error={error}/>
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