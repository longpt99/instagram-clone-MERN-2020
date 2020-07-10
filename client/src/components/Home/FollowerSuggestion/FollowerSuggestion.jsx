import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

Follow.propTypes = {
  adminInfo: PropTypes.object,
  suggestedUsers: PropTypes.array,
};

function Follow(props) {
  const { adminInfo, suggestedUsers } = props;
  return (
    <div className='follow-wrapper'>
      <header className='user'>
        <Link className='user-avatar' to={`/${adminInfo.nickname}`}>
          <img src={adminInfo.profilePictureUrl} alt="user"/>
        </Link>
        <div className='user-info'>
          <Link to={`/${adminInfo.nickname}`} className='user-nickname'>
            <span>{adminInfo.nickname}</span>
          </Link>
          <span className='user-name'>
            {adminInfo.name}
          </span>
        </div>
      </header>
      <div className='follow-content'>
        <div className='follow-title'>
          <span>Gợi ý cho bạn</span>
          <Link to='/explore/people/suggestion'>Xem tất cả</Link>
        </div>
        {
          suggestedUsers.map((user, i) => (
            <div className='follow-user-list' key={i}>
              <div className='follow-user-info'>
                <Link to={`/${user.nickname}`}>
                  <img src={user.profilePictureUrl} alt="user"/>
                </Link>
                <div className='follow-user-item'>
                  <Link to={`/${user.nickname}`}>{user.nickname}</Link>
                  <button onClick={()=> props.handleClickFollowButton(user._id)}>Theo dõi</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <footer className='footer'>
        <span>
          &copy; 2020 INSTAGRAM FROM FACEBOOK
        </span>
      </footer>
    </div>
  );
}

export default Follow;