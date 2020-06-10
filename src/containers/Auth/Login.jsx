import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import LoginForm from '../../components/Auth/Login/Form';
import { actFetchTokenRequest, actSetLoginError} from '../../store/actions';

LoginContainer.propTypes = {
  
};

function LoginContainer(props) {
  const { error, setError } = props;
  console.log(error)

  // useEffect(() => {
  //   const countdownErr = setTimeout(() => {
  //     setError();
  //   }, 5000)
  //   console.log(1)

  //   return () => {
  //     clearTimeout(countdownErr);
  //   }
  // }, [error])

  function onHandleInfo(data) {
    props.fetchToken(data);
  }

  return (
    <LoginForm onHandleInfo={onHandleInfo} error={error}/>
  );
}

const mapStateToProps = state => {
  return {
    error: state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchToken : (data) => {
      dispatch(actFetchTokenRequest(data));
    },
    setError : () => {
      dispatch(actSetLoginError(null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);