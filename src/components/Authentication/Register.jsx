import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as actions from '../../actions';

Register.propTypes = {
  
};

function Register(props) {
  return (
    <div>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    return {
      onRegister: (user) => {
        dispatch()
      }
    }
  }
}

export default connect(mapStateToProps, null)(Register);