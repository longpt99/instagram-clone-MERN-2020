import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import {connect} from 'react-redux';
import { Container, Row, Col} from "reactstrap";

import Header from '../../components/Profile/Header';
import Navigation from '../../components/Profile/Navigation';
import Post from '../../components/Profile/Post';
import Upload from '../../components/Profile/Upload';
import UploadModal from '../../components/Profile/Modal/Upload';
import { actFetchUserProfileRequest } from '../../store/actions';

Account.propTypes = {
  
};

function Account(props) {
  const [showModal, setShowModal] = useState(false);
  const [userPofile, setUserProfile] = useState(null);
  const {nickname} = useParams();
  const {user, fetchUser, admin } = props;
  const [component, setComponent] = useState(1);

  function handleChangeComponent(value) {
    setComponent(value);
  }

  function handleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    fetchUser(nickname);
  }, [])

  useEffect(() => {
    setUserProfile(user)
  }, [user])

  if (!userPofile) {
    return <h1>Loading</h1>
  }

  return (
    <div className='profile-page'>
      {
        showModal && <UploadModal handleModal={handleModal}/>
      }
      <Container>
        <Row>
          <Col>
            <Header userInfo={user.user}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Navigation handleChangeComponent={handleChangeComponent} adminUrl={admin.nickname}/>
          </Col>
        </Row>
        {
          component === 1 && <Row>
            { 
              user.images.map((image,index) => (
                <Col xs='4'>
                  <Post image={image} key={index}/>
                </Col>
              ))
            }
          </Row>
        }
        {
          component === 2 && <Row>
            <Col>
              <Upload handleModal={handleModal}/>
            </Col>
          </Row>
        }
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    admin: state.admin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (data) => {
      dispatch(actFetchUserProfileRequest(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);