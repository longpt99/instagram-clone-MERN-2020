import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from 'react-redux';

import AuthImg from './components/Auth/Image'
import Routes from "./routes";

function App(props) {
  const { token } = props;
  return (
    <Container>
      <Row>
        {!token && <AuthImg /> }
        <Routes />
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    authPage: state.authPage,
    token: state.token,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
