import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

import {actDeleteToken} from '../../store/actions'

HeaderContainer.propTypes = {
  
};

function HeaderContainer(props) {
  const {deleteToken, admin, fetchAdmin} = props;
  console.log(admin)

  function handleLogout() {
    deleteToken();
  }

  return (
    <Navbar handleLogout={handleLogout} adminInfo={admin}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);