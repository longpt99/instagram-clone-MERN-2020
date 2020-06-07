import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';


import Login from '../../components/Auth/Login/Form';

import { actFetchTokenRequest} from '../../actions';
import { Alert } from 'reactstrap';

LoginContainer.propTypes = {
  
};

function LoginContainer(props) {
  const { token, error } = props;
  console.log(error)

  if (token) {
    return <Redirect to='/'/>
  }

  function onHandleInfo(data) {
    props.fetchToken(data);
  }

  return (
    <Login onHandleInfo={onHandleInfo} error={error}/>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    error: state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchToken : (data) => {
      dispatch(actFetchTokenRequest(data));
  },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);