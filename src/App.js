import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";

import './App.scss'

import AuthImg from './components/Auth/Image';
import ToggleForm from './components/Auth/ToggleForm';
import DownloadApp from './components/Auth/Download/App';
import Routes from "./routes";
import { Header } from './containers';

import { actFetchAdminRequest } from './store/actions';

function App(props) {
  const {fetchAdmin, admin, token} = props;

  useEffect(() => {
    fetchAdmin();
  }, [token]);

  if (token) {
    if(!admin) {
      return <h1>Loading</h1>
    }
  }
  
  return (
    <BrowserRouter>
      { !token &&
        <div className='auth-page'>
          <Container>
            <Row>
              <Col>
                <AuthImg />
              </Col>
              <Col>
                <Routes />
                <ToggleForm />
                <DownloadApp />
              </Col>
            </Row>
          </Container>
        </div>
      }
      {
        token && <div>
          <Routes />
        </div>
      }
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
