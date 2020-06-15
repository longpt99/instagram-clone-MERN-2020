import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "reactstrap";
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";

import './App.scss'

import Routes from "./routes";

import { actFetchAdminRequest } from './store/actions';

function App(props) {
  const {fetchAdmin, admin, token} = props;

  useEffect(() => {
    fetchAdmin();
  }, [token]);

  // if (true) {
  // }

  if (token) {
    if(!admin) {
      return <h1>Loading</h1>
    }
  }
  
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    admin: state.admin,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAdmin: () => {
      dispatch(actFetchAdminRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
