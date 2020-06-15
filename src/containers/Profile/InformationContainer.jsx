import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProfileInformation } from '../../components';

InformationContainer.propTypes = {
  
};

function InformationContainer(props) {
  const {user} = props;
  return <ProfileInformation userInfo={user.userInfo}/>
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(InformationContainer);