import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import './styles.scss';

function Header(props) {
  const { adminInfo, isFocus, textInput, users } = props;
  return (
    <div className="c-header">
      <Container>
        <Row className="align-items-center">
          <Col>
            <Link to="/" onClick={props.handleBackToHomePage}>
              Instagram
            </Link>
          </Col>
          <Col>
            <div className="c-header__search">
              <input
                id="input"
                autoComplete="off"
                className="c-header__searchInput"
                placeholder={isFocus ? 'Tìm kiếm' : ''}
                value={textInput}
                onChange={props.handleChangeTextInput}
                onFocus={props.handleFocusSearchInput}
                onBlur={props.handleBlurSearchInput}
                required
              />
              {users.length > 0 && (
                <div className="c-header__searchWrapper">
                  {users.map((user, index) => (
                    <Link to={`/${user.nickname}`}>
                      <div className="c-header__searchItem" key={index}>
                        <div className="c-header__searchImg">
                          <img
                            src={user.profilePictureUrl}
                            alt="avatar"
                            srcset=""
                          />
                        </div>
                        <div className="c-header__searchInfo">
                          <div className="c-header__searchNickname">
                            <span>{user.nickname}</span>
                          </div>
                          <span>{user.name}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <label
                className={
                  !isFocus
                    ? 'c-header__searchLabel'
                    : 'c-header__searchLabel--focus'
                }
                htmlFor="input"
              >
                <span>
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                {isFocus ? (
                  <span>
                    <ion-icon
                      name="close-circle-sharp"
                      onClick={props.handleClearSearchInput}
                    ></ion-icon>
                  </span>
                ) : (
                  <span>Tìm kiếm</span>
                )}
              </label>
            </div>
          </Col>
          <Col>
            <div className="c-header--right">
              <Link
                className="c-header__icon"
                to="/"
                onClick={props.handleBackToHomePage}
              >
                <ion-icon name="home-sharp"></ion-icon>
              </Link>
              <Link className="c-header__icon" to="/direct/inbox">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </Link>
              <Link className="c-header__icon" to="/explore">
                <ion-icon name="earth-outline"></ion-icon>
              </Link>
              <Link className="c-header__icon" to="/account/activity">
                <ion-icon name="heart-outline"></ion-icon>
              </Link>
              <button
                onClick={props.handleOptionClick}
                className="c-btn__config"
              >
                <ion-icon name="person-circle-outline"></ion-icon>
                <div className="c-header__option">
                  <Link
                    to={`/${adminInfo.nickname}`}
                    className="c-header__optionItem"
                  >
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Trang cá nhân</span>
                  </Link>
                  <Link to="/account" className="c-header__optionItem">
                    <ion-icon name="settings-outline"></ion-icon>
                    <span>Cài đặt</span>
                  </Link>
                  <button
                    value="btn"
                    className="c-header__optionItem c-btn__logout"
                    onClick={props.handleLogoutClick}
                  >
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
