import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col} from "reactstrap";

import FollowerSuggestion from '../../components/Home/FollowerSuggestion'
import Post from '../../components/Home/Post'
import Story from '../../components/Home/Story'
import Modal from '../../components/Home/Modal'

import { actFectchSuggestedUsersRequest } from '../../store/actions';


HomeContainer.propTypes = {
  
};

function HomeContainer(props) {
  const {admin, fetchSuggestedUsers, suggestedUsers} = props;
  const [suggestedUserList, setSuggestedUserList] = useState(suggestedUsers)


  function handleModal(value) {
    setHideModal(!value)
  }

  useEffect(() => {
    fetchSuggestedUsers();
  }, [])

  useEffect(() => {
    setSuggestedUserList(suggestedUsers)
  }, [suggestedUsers])

  console.log(suggestedUserList)

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
            <FollowerSuggestion adminInfo={admin}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    suggestedUsers: state.suggestedUsers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSuggestedUsers: () => {
      dispatch(actFectchSuggestedUsersRequest())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);