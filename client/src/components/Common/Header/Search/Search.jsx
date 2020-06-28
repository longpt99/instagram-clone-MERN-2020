import React from 'react';
// import PropTypes from 'prop-types';

import cls from './style.module.scss';
import { Link } from 'react-router-dom';

Search.propTypes = {
  
};

function Search(props) {
 const {users} = props;
 return (
    <div className={cls.header_search}>
      {
        users.map((user,index) => (
          <Link to={`/${user.nickname}`}>
            <div className={cls.header_info}>
              <div className={cls.header_info_img}>
                <img src={user.profilePictureUrl} alt="avatar" srcset=""/>
              </div>
              <div className={cls.header_info_title}>
                <div className={cls.header_info_nickname}>
                  <span>{user.nickname}</span>
                </div>
                <span>{user.name}</span>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
 )
}

export default Search;