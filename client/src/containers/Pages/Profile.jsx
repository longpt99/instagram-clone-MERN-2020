import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import {actFetchUserProfileRequest} from 'store/actions'
import {Navigation, Post , Upload, ModalUpload} from 'components/Profile'
import { InformationContainer } from 'containers/Profile';

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
  }, [dispatch, params.nickname]);
  
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
    return <></>
  }

  return (
    <div className='profile-page'>
      {
        showModal && <ModalUpload
        caption={caption}
        handleClickToHideModal={onHandleModal}
        handleGetValueCaption={handleGetValueCaption}
        />
      }
      <Container>
        <InformationContainer />
        <Navigation
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
                    <Post image={image}/>
                  </Col>
                )
              })
            }
          </Row>
        }
        {
          subPage === 2 && <Upload onHandleClickToShowModal={onHandleModal}/>
        }
      </Container>
    </div>
  );
}

export default ProfileContainer;