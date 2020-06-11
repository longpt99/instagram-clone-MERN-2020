import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col} from "reactstrap";

import FollowerSuggestion from '../../components/Home/FollowerSuggestion'
import Post from '../../components/Home/Post'
import Story from '../../components/Home/Story'
import Modal from '../../components/Home/Modal'

import { actFetchUserRequest } from '../../store/actions';


HomeContainer.propTypes = {
  
};

function HomeContainer(props) {
  const {admin} = props;
  const [isHideModal, setHideModal] = useState(true);

  function handleModal(value) {
    setHideModal(!value)
  }


  return (
    <div className='home-page'>
      {
        !isHideModal && <Modal handleModal={handleModal}/>
      }
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
                <Post handleModal={handleModal} userInfo={admin}/>
              </Col>
            </Row>
          </Col>
          <Col>
            <FollowerSuggestion userInfo={admin}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  }
}


export default connect(mapStateToProps, null)(HomeContainer);