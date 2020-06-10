import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

Follow.propTypes = {
  
};

function Follow(props) {
  const { userInfo } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userInfo)
  }, [userInfo])

  if(!user) {
    return <h1>Loading</h1>
  }
  return (
    <div className='follow-wrapper'>
      <header className='user'>
        <a className='user-avatar' href="#">
          <img src="https://loremflickr.com/30/30" alt="user"/>
        </a>
        <div className='user-info'>
          <a href="#" className='user-nickname'>
            <span>{user.nickname}</span>
          </a>
          <span className='user-name'>
            {user.name}
          </span>
        </div>
      </header>
      <div className='follow-content'>
        <div className='follow-title'>
          <span>Gợi ý cho bạn</span>
          <Link to='/explore/people/'>Xem tất cả</Link>
        </div>
        <div className='follow-user-list'>
          <div className='follow-user-info'>
            <Link>
              <img src="https://loremflickr.com/30/30" alt="user"/>
            </Link>
            <div className='follow-user-item'>
              <Link>nickname</Link>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div className='follow-user-list'>
          <div className='follow-user-info'>
            <Link>
              <img src="https://loremflickr.com/30/30" alt="user"/>
            </Link>
            <div className='follow-user-item'>
              <Link>nickname</Link>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div className='follow-user-list'>
          <div className='follow-user-info'>
            <Link>
              <img src="https://loremflickr.com/30/30" alt="user"/>
            </Link>
            <div className='follow-user-item'>
              <Link>nickname</Link>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div className='follow-user-list'>
          <div className='follow-user-info'>
            <Link>
              <img src="https://loremflickr.com/30/30" alt="user"/>
            </Link>
            <div className='follow-user-item'>
              <Link>nickname</Link>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
        <div className='follow-user-list'>
          <div className='follow-user-info'>
            <Link>
              <img src="https://loremflickr.com/30/30" alt="user"/>
            </Link>
            <div className='follow-user-item'>
              <Link>nickname</Link>
              <button>Theo dõi</button>
            </div>
          </div>
        </div>
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