import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

import {actDeleteToken, actFetchUserRequest} from '../../store/actions'

HeaderContainer.propTypes = {
  
};

function HeaderContainer(props) {
  const {deleteToken, user, fetchUser} = props;
  function handleLogout() {
    deleteToken();
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <Navbar handleLogout={handleLogout} userInfo={user}/>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteToken: () => {
      dispatch(actDeleteToken());
    },
    fetchUser: () => {
      dispatch(actFetchUserRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);