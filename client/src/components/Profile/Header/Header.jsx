import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

Header.propTypes = {};

function Header(props) {
  const { userInfo } = props;

  return (
    <header className={styles.profile_header}>
      <div className={styles.profile_avatar}>
        <img src={userInfo.profilePictureUrl} alt="profile_picture" />
        <div />
      </div>
      <div className={styles.profile_primary}>
        <div className={styles.profile_nickname}>
          <span>{userInfo.nickname}</span>
          <Link to="/accounts/setting" title="chỉnh sửa trang cá nhân">
            <ion-icon name="settings-outline" />
          </Link>
        </div>
        <ul className={styles.profile_title}>
          <li>
            <span>
              <span className={styles.profile_common_title}>6 </span>
              bài viết
            </span>
          </li>
          <li>
            <Link>
              <span className={styles.profile_common_title}>250 </span>
              người theo dõi
            </Link>
          </li>
          <li>
            <Link>
              Đang theo dõi
              <span className={styles.profile_common_title}>100 </span>
              người dùng
            </Link>
          </li>
        </ul>
        <div className={styles.profile_description}>
          <span className={styles.profile_description_name}>
            {userInfo.name}
          </span>
          <br />
          <span>
            Phương Thành Long just be a good person/> –––
            {/* <span role="img">✉️ phuongthanhlong.99@gmail.com</span>  */}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
