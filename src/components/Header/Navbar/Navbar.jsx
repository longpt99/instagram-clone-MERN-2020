import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss'

import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { Link } from 'react-router-dom'
import Search from '../Search/';

function TopNav(props) {
  return (
    <div className='header-nav'>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <Link to="/">Instagram</Link>
          </Col>
          <Col>
            <Search />
          </Col>
          <Col>
            <div className='header-right'>
              <Link to="/">
                <ion-icon name="home-sharp"></ion-icon>
              </Link>
              <Link to="/direct/">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </Link>
              <Link to="/explore/">
                <ion-icon name="earth-outline"></ion-icon>
              </Link>
              <Link to="/account/activity/">
                <ion-icon name="heart-outline"></ion-icon>
              </Link>
              <Link to="/account/">
                <ion-icon name="person-circle-outline"></ion-icon>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNav;