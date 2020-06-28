import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";

import styles from './styles.module.scss';
import Search from 'components/Common/Header/Search'

function Header(props) {
  const { adminInfo, isFocus, textInput, users } = props;
  return (
    <div className={styles.header_wrapper}>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <Link to="/" onClick={props.handleBackToHomePage}>Instagram</Link>
          </Col>
          <Col>
            <div className={styles.header_search}>
              <input 
                id='input'
                autoComplete='off'
                className={styles.header_search_input}
                placeholder={isFocus ? 'Tìm kiếm' : ''}
                value={textInput}
                onChange={props.handleChangeTextInput}
                onFocus={props.handleFocusSearchInput}
                onBlur={props.handleBlurSearchInput}
                required
              />
              {
                users.length > 0 && <div className={styles.search_wrapper}>
                  <Search users={users}/>
                </div>
              }
              <label className={!isFocus ? styles.header_search_label : styles.header_search_label_focus} htmlFor='input'>
                <span >
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                {
                  isFocus
                  ? <span><ion-icon name="close-circle-sharp" onClick={props.handleClearSearchInput}></ion-icon></span> 
                  : <span>Tìm kiếm</span>
                }
              </label>
            </div>
          </Col>
          <Col>
            <div className={styles.header_right}>
              <Link className={styles.header_icon} to="/" onClick={props.handleBackToHomePage}>
                <ion-icon name="home-sharp"></ion-icon>
              </Link>
              <Link className={styles.header_icon} to="/direct/inbox">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </Link>
              <Link className={styles.header_icon} to="/explore">
                <ion-icon name="earth-outline"></ion-icon>
              </Link>
              <Link className={styles.header_icon} to="/account/activity">
                <ion-icon name="heart-outline"></ion-icon>
              </Link>
              <button 
                onClick={props.handleOptionClick}
                className={styles.btn_config}
              >
                <ion-icon name="person-circle-outline"></ion-icon>
                <div className={styles.header_option}>
                  <Link to={`/${adminInfo.nickname}`} className={styles.header_option_item}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Trang cá nhân</span>
                  </Link>
                  <Link to='/account' className={styles.header_option_item}>
                    <ion-icon name="settings-outline"></ion-icon>
                    <span>Cài đặt</span>
                  </Link>
                  <button value='btn' className={`${styles.btn_logout} ${styles.header_option_item}`} onClick={props.handleLogoutClick} >
                    Đăng xuất
                  </button>
                </div>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;