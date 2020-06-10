import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import {connect} from 'react-redux';
import { Container, Row, Col} from "reactstrap";

import Header from '../../components/Profile/Header';
import Navigation from '../../components/Profile/Navigation';
import Post from '../../components/Profile/Post';
import Upload from '../../components/Profile/Upload';
import UploadModal from '../../components/Profile/Modal/Upload';

Account.propTypes = {
  
};

function Account(props) {
  const postList = [1,2,3,4,5,6,7];
  const [showModal, setShowModal] = useState(false)
  const {nickname} = useParams();
  const {user} = props;
  const [component, setComponent] = useState(1);

  function handleChangeComponent(value) {
    setComponent(value);
  }

  function handleShowModal() {
    setShowModal(true)
  }

  return (
    <div className='profile-page'>
      {
        showModal && <UploadModal />
      }
      <Container>
        <Row>
          <Col>
            <Header userInfo={user}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Navigation handleChangeComponent={handleChangeComponent}/>
          </Col>
        </Row>
        {
          component === 1 && <Row>
            { 
              postList.map(post => (
                <Col xs='4'>
                  <Post />
                </Col>
              ))
            }
          </Row>
        }
        {
          component === 2 && <Row>
            <Col>
              <Upload handleShowModal={handleShowModal}/>
            </Col>
          </Row>
        }
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Account);