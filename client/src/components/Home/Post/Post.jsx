import React, {useRef} from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

import { Link } from 'react-router-dom';

Post.propTypes = {
  
};

function Post(props) {
  const dynamicRefs = useRef([]);
  const {posts, comment, adminId} = props;
  
  function handleClickFocusComment(i) {
    dynamicRefs.current[i].focus()
  }

  return (
    <div>
      {
        posts.map((post, index) => (
          <div className='post-content' key={index}>
            <header className='post-user'>
              <Link className='post-user-avatar' to={`/${post.userInfo.nickname}`}>
                <img src={post.userInfo.profilePictureUrl} alt="user"/>
              </Link>
              <div className='post-user-option'>
                <Link to={`/${post.userInfo.nickname}`} className='post-user-nickname'>
                  <span>{post.userInfo.nickname}</span>
                </Link>
                <button className='btn-config' onClick={props.handleShowModal}>
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </button>
              </div>
            </header>
            <div 
              className='post-image'
              onDoubleClick={()=> 
                post.reactions.some(x => x.userId === adminId)
                ? props.handleClickUnlikeImage(post._id)
                : props.handleClickLikeImage(post._id)
              }>
              <img className='img-fluid' src={post.imageUrl} alt='img'/>
            </div>
            <div className='post-primary'>
              <div className='post-reaction'>
                <div className='post-reaction--left'>
                  <button className='btn-config'>
                    <ion-icon 
                      name={post.reactions.some(x => x.userId === adminId) ? "heart-sharp" : "heart-outline"}
                      style={post.reactions.some(x => x.userId === adminId) ? {color: "rgb(237, 73, 86)"} : null}
                      onClick={()=>
                        post.reactions.some(x => x.userId === adminId)
                        ? props.handleClickUnlikeImage(post._id)
                        : props.handleClickLikeImage(post._id)
                      }>
                    </ion-icon>
                  </button>
                  <button className='btn-config'>
                    <ion-icon name="chatbubble-outline" onClick={() => handleClickFocusComment(index)}></ion-icon>
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
                <span>{post.reactions.length ? `${post.reactions.length} người  đã thích` : ''}</span>
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
                      <Link to={{pathname:`/posts/${post._id}`, state: { modal: true }}}>Xem tất cả</Link>
                      {post.comments.slice(post.comments.length - 3).map((comment,i) => (
                          <div className='post-cmt' key={i}>
                            <a href={`/${comment.userInfo.nickname}`}>
                              <span>{comment.userInfo.nickname}</span>
                            </a>
                            <span>{comment.content}</span>
                          </div>
                        ))
                      } 
                    </div>
                  : post.comments.map((comment, i) => (
                    <div className='post-cmt' key={i}>
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
                  ref={el => dynamicRefs.current[index] = el} 
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