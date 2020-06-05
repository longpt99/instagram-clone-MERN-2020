import React, { useState } from "react";
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

function App(props) {
  const { token } = props;
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
          <div className='header-section'>
            <Header />
          </div>
          <Routes />
        </div>
      }
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
