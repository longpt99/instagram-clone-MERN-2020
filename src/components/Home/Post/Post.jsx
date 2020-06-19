import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Modal from '../Modal';
import { Link } from 'react-router-dom';

Post.propTypes = {
  
};

function Post(props) {
  const textInput = useRef();
  const {posts, isLiked, comment} = props;

  function handleClickFocusComment() {
    textInput.current.focus();
  }

  return (
    <div>
      {
        posts.map((post, index) => (
          <div className='post-content'>
            <header className='post-user'>
              <a className='post-user-avatar' href="#">
                <img src={post.userInfo.profilePictureUrl} alt="user"/>
              </a>
              <div className='post-user-option'>
                <a href={`/${post.userInfo.nickname}`} className='post-user-nickname'>
                  <span>{post.userInfo.nickname}</span>
                </a>
                <button className='btn-config' onClick={props.handleShowModal}>
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </button>
              </div>
            </header>
            <div className='post-image' onDoubleClick={props.handleClickLikeImage}>
              <img className='img-fluid' src={post.imageUrl} alt='img'/>
            </div>
            <div className='post-primary'>
              <div className='post-reaction'>
                <div className='post-reaction--left'>
                  <button className='btn-config'>
                    <ion-icon 
                      name={isLiked ? "heart-sharp" : "heart-outline"}
                      style={isLiked ? {color: "rgb(237, 73, 86)"} : null}
                      onClick={props.handleClickLikeImage}
                      >
                      </ion-icon>
                  </button>
                  <button className='btn-config'>
                    <ion-icon name="chatbubble-outline" onClick={handleClickFocusComment}></ion-icon>
                  </button>
                  <button className='btn-config'>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </button>
                </div>
                <button className='btn-config post-reaction--right'>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </button>
              </div>
              <div className='post-count-like'>
                <a href='#'>
                  <img src="https://loremflickr.com/20/20"/>
                  <span>user_name</span>
                </a>
                <span>và</span>
                <button className='btn-config'>total_like</button>
                <span>đã thích</span>
              </div>
              <div className='post'>
                <div className='post-caption'>
                  <a href={`/${post.userInfo.nickname}`}>
                    <span>{post.userInfo.nickname}</span>
                  </a>
                  <span>{post.caption}</span>
                </div>
                {
                  post.comments.length >= 4 
                  ? <div>
                      <Link to={`/post/${post._id}`}>Xem tất cả</Link>
                      {post.comments.slice(0,3).reverse().map(comment => (
                          <div className='post-cmt'>
                            <a href={`/${comment.userInfo.nickname}`}>
                              <span>{comment.userInfo.nickname}</span>
                            </a>
                            <span>{comment.content}</span>
                          </div>
                        ))
                      } 
                    </div>
                  : post.comments.slice(0,4).reverse().map(comment => (
                    <div className='post-cmt'>
                      <a href={`/${comment.userInfo.nickname}`}>
                        <span>{comment.userInfo.nickname}</span>
                      </a>
                      <span>{comment.content}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='post-comment'>
              <form className='post-comment__form' onSubmit={props.hanldeSubmitComment}>
                <textarea
                  required
                  ref={textInput} 
                  type="text" 
                  value={comment}
                  placeholder='Thêm bình luận...'
                  onChange={props.handleChangeCommmentInput}
                  onFocus={()=>props.handleFocusTextarea(post._id)}
                  onKeyDown={props.hanldeEnterSubmitComment}
                >
                </textarea>
                <button className='btn-config'>Đăng</button>
              </form>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Post;