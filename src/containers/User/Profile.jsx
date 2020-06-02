import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Login from '../../components/Auth/Login'

ProfileContainer.propTypes = {
  
};

function ProfileContainer(props) {
  return (
    <Login />
  );
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);