import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import axios from 'utils/axios';

import {
  ProfileInformation,
  ProfileNavigation,
  ProfilePost,
  ProfileUpload,
  ProfileModalUpload,
} from 'components';

function ProfileContainer() {
  const [user, setUser] = useState({});
  const admin = useSelector((state) => state.users.admin);
  const { params } = useRouteMatch();
  const [subPage, setSubPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    axios
      .get(`/accounts/${params.nickname}`)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.nickname]);

  function handleGetValueCaption(e) {
    const { value } = e.target;
    setCaption(value);
  }

  function handleChangeSubPage(value) {
    setSubPage(value);
  }

  function onHandleModal() {
    setShowModal(!showModal);
  }

  if (Object.keys(user).length === 0) {
    return <></>;
  }

  console.log(user);

  return (
    <div className="profile-page">
      {showModal && (
        <ProfileModalUpload
          caption={caption}
          handleClickToHideModal={onHandleModal}
          handleGetValueCaption={handleGetValueCaption}
        />
      )}
      <Container>
        <ProfileInformation
          userInfo={user.userInfo}
          countPost={user.images.length}
        />
        <ProfileNavigation
          subPage={subPage}
          userUrl={params.nickname}
          adminUrl={admin.nickname}
          handleClickItem={handleChangeSubPage}
        />
        {subPage === 1 && (
          <Row>
            {user.images.map((image, index) => (
              <Col xs="4" key={index}>
                <ProfilePost image={image} />
              </Col>
            ))}
          </Row>
        )}
        {subPage === 2 && (
          <ProfileUpload onHandleClickToShowModal={onHandleModal} />
        )}
      </Container>
    </div>
  );
}

export default ProfileContainer;
