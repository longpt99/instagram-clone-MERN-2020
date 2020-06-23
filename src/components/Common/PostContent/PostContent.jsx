import React from 'react';
// import PropTypes from 'prop-types';
import cls from './styles.module.scss';
import { Link } from 'react-router-dom';

PostContent.propTypes = {
  
};

function PostContent(props) {
  const {post} = props;

  if (Object.keys(post).length === 0) {
    return <></>}

  return (
    <div className={cls.post_wrapper} onClick={props.handleClickOutModal}>
      <div className={cls.post_modal}>
        <div className={cls.post_modal__image}>
          <img className='img-fluid' src={post.imageUrl} alt="" srcset=""/>
        </div>
        <div className={cls.post_modal__content}>
          <header>
            <Link to={`/${post.userInfo.nickname}`}>
              <img src={post.userInfo.profilePictureUrl} alt="" srcset=""/>
            </Link>
            <Link to={`/${post.userInfo.nickname}`}>
              <h5>{post.userInfo.nickname}</h5>
            </Link>
          </header>
          <div>
              <Link to={`/${post.userInfo.nickname}`}>
                <img src={post.userInfo.profilePictureUrl} alt="" srcset=""/>
              </Link>
              <Link to={`/${post.userInfo.nickname}`}>
                <h5>{post.userInfo.nickname}</h5>
              </Link>
              <span>{post.caption}</span>
            </div>
          <div className={cls.post__content__scroll_bar}>
            {
              post.comments.map(comment => (
                <div>
                  <Link to={`/${comment.userInfo.nickname}`}>
                    <img src={comment.userInfo.profilePictureUrl} alt="" srcset=""/>
                  </Link>
                  <Link to={`/${comment.userInfo.nickname}`}>
                    <h5>{comment.userInfo.nickname}</h5>
                  </Link>
                  <span>{comment.content}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContent;