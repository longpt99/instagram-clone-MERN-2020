import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

import {actDeleteToken} from '../../store/actions'

Header.propTypes = {
  
};

function Header(props) {
  const {deleteToken} = props;
  function handleLogout() {
    deleteToken();
  }

  return (
    <Navbar handleLogout={handleLogout}/>
  );
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteToken: () => {
      dispatch(actDeleteToken());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);