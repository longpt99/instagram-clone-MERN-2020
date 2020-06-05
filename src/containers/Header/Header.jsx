import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <Navbar />
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, null)(Header);