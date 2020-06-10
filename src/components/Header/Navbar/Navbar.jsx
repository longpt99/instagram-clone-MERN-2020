import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';

import { Container, Row, Col, Button } from "reactstrap";

import { Link } from 'react-router-dom'
import Search from '../Search/';

function TopNav(props) {
  const [option, setOption] = useState(false);
  const { userInfo } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userInfo)
  }, [userInfo])

  if(!user) {
    return <h1>Loading</h1>
  }

  function handleClick(e) {
    console.log(e.target.value)
    setOption(!option)
  }

  function handleOutsideClick(e) {
    // const {value} = e.target;
    // console.log(value)
    // if (value.length === 0) {
      // setOption(!option)
    //   return;
    // }
  }

  function handleLogout() {
    props.handleLogout();
  }

  return (
    <div className={styles.header_nav}>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <Link to="/">Instagram</Link>
          </Col>
          <Col>
            <Search />
          </Col>
          <Col>
            <div className={styles.header_right}>
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
              <button onClick={handleClick} className={styles.btn_config}>
                <ion-icon name="person-circle-outline"></ion-icon>
              </button>
              {
                option && <div className={styles.header_option}>
                  <Link to={`/${user.nickname}`} className={styles.header_option_item}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Trang cá nhân</span>
                  </Link>
                  <Link to='/account' className={styles.header_option_item}>
                    <ion-icon name="settings-outline"></ion-icon>
                    <span>Cài đặt</span>
                  </Link>
                  <button value='btn' className={`${styles.btn_logout} ${styles.header_option_item}`} onClick={handleLogout} >
                    Đăng xuất
                  </button>
                </div>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNav;