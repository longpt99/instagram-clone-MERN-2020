import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

import {actDeleteToken, actFetchAdminRequest} from '../../store/actions'

HeaderContainer.propTypes = {
  
};

function HeaderContainer(props) {
  const {deleteToken, admin, fetchAdmin} = props;
  console.log(admin)

  function handleLogout() {
    deleteToken();
  }

  useEffect(() => {
    fetchAdmin();
  }, [])

  return (
    <Navbar handleLogout={handleLogout} userInfo={admin}/>
  );
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteToken: () => {
      dispatch(actDeleteToken());
    },

    fetchAdmin: () => {
      dispatch(actFetchAdminRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);