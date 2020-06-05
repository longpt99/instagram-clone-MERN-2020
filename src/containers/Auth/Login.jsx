import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';


import Login from '../../components/Auth/Login/Form';

import { actFetchTokenRequest} from '../../actions';

LoginContainer.propTypes = {
  
};

function LoginContainer(props) {
  const { token } = props;

  if (token) {
    return <Redirect to='/'/>
  }
  console.log(token)


  function onHandleInfo(data) {
    props.fetchToken(data);
  }

  return (
    <Login onHandleInfo={onHandleInfo}/>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
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