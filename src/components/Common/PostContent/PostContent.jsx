import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

PostContent.propTypes = {
  
};

function PostContent(props) {
  const {postContent} = props;

debugger;
  return (
    <div className='post-content-modal'>
      <div className='post-content-wrapper'></div>
      <div>
        <img className='img-fluid' src={postContent.imageUrl} alt="" srcset=""/>
        <span>{postContent.userInfo.nickname}</span>

      </div>
      <div>
        <header>
          {/* <Link to={`/${postContent.userInfo.nickname}`}>
            <img src={postContent.userInfo.profilePictureUrl} alt="" srcset=""/>
          </Link>
          <Link to={`/${postContent.userInfo.nickname}`}>
          </Link> */}
        </header>
      </div>
    </div>
  );
}

export default PostContent;