import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import {ProfileNavigation, ProfilePost , ProfileUpload, ProfileModalUpload} from '../../components'
import {InformationContainer, ModalUploadContainer, PostContainer } from '../Profile';
import {actFetchUserProfileRequest} from '../../store/actions'
import { useState } from 'react';

ProfileContainer.propTypes = {
  
};

function ProfileContainer(props) {
  const user = useSelector(state => state.users.user);
  const admin = useSelector(state => state.users.admin);
  const {params} = useRouteMatch();
  const dispatch = useDispatch();
  const [subPage, setSubPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState('');
  
  useEffect(() => {
    dispatch(actFetchUserProfileRequest(params.nickname));
  }, [user]);
  
  function handleGetValueCaption(e) {
    const {value} = e.target;
    setCaption(value)
  }
  
  function handleChangeSubPage(value) {
    setSubPage(value)
  }

  function onHandleModal() {
    setShowModal(!showModal)
  }

  if (!user) {
    return <h1>Loading</h1>
  }

  return (
    <div className='profile-page'>
      {
        showModal && <ProfileModalUpload
          caption={caption}
          handleClickToHideModal={onHandleModal}
          handleGetValueCaption={handleGetValueCaption}
        />
      }
      <Container>
        <InformationContainer />
        <ProfileNavigation
          subPage={subPage}
          userUrl={params.nickname}
          adminUrl={admin.nickname}
          handleClickItem={handleChangeSubPage}
        />
        {
          subPage === 1 && <Row>
            {
              user.images.map((image,index) => {
                return (
                  <Col xs='4' key={index}>
                    <ProfilePost image={image}/>
                  </Col>
                )
              })
            }
          </Row>
        }
        {
          subPage === 2 && <ProfileUpload onHandleClickToShowModal={onHandleModal}/>
        }
      </Container>
    </div>
  );
}

export default ProfileContainer;