import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { ProfileInformation } from '../../components';

InformationContainer.propTypes = {
  
};

function InformationContainer(props) {
  const user = useSelector(state => state.users.user)
  return <ProfileInformation userInfo={user.userInfo} countPost={user.images.length}/>
}

export default InformationContainer;