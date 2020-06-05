import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import Follow from '../../components/Home/Follow'
import Post from '../../components/Home/Post'
import Story from '../../components/Home/Story'
Home.propTypes = {
  
};

function Home(props) {
  return (
    <div className='home-page'>
      <Container>
        <Row>
          <Col xs='8'>
            <Row>
              <Col>
                <Story />
              </Col>
            </Row>
            <Row>
              <Col>
                <Post />
              </Col>
            </Row>
          </Col>
          <Col>
            <Follow />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);