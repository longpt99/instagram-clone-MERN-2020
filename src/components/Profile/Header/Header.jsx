import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

Header.propTypes = {
  
};

function Header(props) {
  const {userInfo} = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userInfo)
  }, [userInfo])

  if(!user) {
    return <h1>Loading</h1>
  }

  return (
    <header className={styles.profile_header}>
      <div>
        <img src={user.profilePictureUrl} alt="" srcset=""/>
        <div></div>
      </div>
      <div>
        <div>
          <span>{user.nickname}</span>
          <Link to='/accounts/setting'>
            <ion-icon name="settings-outline"></ion-icon>
          </Link>
        </div>
        <ul>
          <li>
            <span><span></span>bài viết</span>
          </li>
          <li>
            <Link><span></span>người theo dõi</Link>
          </li>
          <li>
            <Link>Đang theo dõi <span></span> người dùng</Link>
          </li>
        </ul>
        <div>
          <h1>{user.name}</h1>
          <br />
          <span>
            {user.bio}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;