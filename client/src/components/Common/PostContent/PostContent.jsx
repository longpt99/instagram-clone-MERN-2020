import React from 'react';
// import PropTypes from 'prop-types';
import cls from './styles.module.scss';
import { Link } from 'react-router-dom';

PostContent.propTypes = {
  
};

function PostContent(props) {
  const {post} = props;

  if (Object.keys(post).length === 0) {
    return <></>
  }

  return (
    <div className={cls.post_modal} onClick={props.handleClickOutModal}>
      <div className={cls.post_wrapper}>
        <div className={cls.post_wrapper__image}>
          <img className='img-fluid' src={post.imageUrl} alt="" srcset=""/>
        </div>
        <div className={cls.post_wrapper__content}>
          <header className={cls.post_user__info}>
            <Link to={`/${post.userInfo.nickname}`}>
              <img className={cls.post_user__avatar} src={post.userInfo.profilePictureUrl} alt="avatar" srcset=""/>
            </Link>
            <Link to={`/${post.userInfo.nickname}`}>
              <h5 className={cls.post_user__name}>{post.userInfo.nickname}</h5>
            </Link>
          </header>
          <div>
              <Link to={`/${post.userInfo.nickname}`}>
                <img className={cls.post_user__avatar} src={post.userInfo.profilePictureUrl} alt="" srcset=""/>
              </Link>
              <Link to={`/${post.userInfo.nickname}`}>
                <h5 className={cls.post_user__name}>{post.userInfo.nickname}</h5>
              </Link>
              <span>{post.caption}</span>
            </div>
          <div className={cls.post_comment}>
            {
              post.comments.map((comment, i) => (
                <div className={cls.post_comment__content} key={i}>
                  <Link to={`/${comment.userInfo.nickname}`}>
                    <img className={cls.post_user__avatar} src={comment.userInfo.profilePictureUrl} alt="" srcset=""/>
                  </Link>
                  <Link to={`/${comment.userInfo.nickname}`}>
                    <h5 className={cls.post_user__name}>{comment.userInfo.nickname}</h5>
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