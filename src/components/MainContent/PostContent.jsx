import React, { useState } from 'react';
import PropTypes from 'prop-types';

PostContent.propTypes = {
  modal: PropTypes.bool,
};

PostContent.defaultProps = {
  modal: false,
}

function PostContent(props) {
  const textInput = React.createRef();
  const {modal} = props;
  const [likeImg, setLikeImg] = useState(false)
  
  function handleModal(value) {
    props.handleModal(value);
  }

  function handleLikeButton(value){
    setLikeImg(value);
  }

  function handleFocusComment() {
    textInput.current.focus();
  }

  function handleLineBreak(event) {

  }

  return (
    <div className='post-content'>
      <div className='post-header'>
        <a className='user-link' href="#">
          <img src="https://loremflickr.com/30/30" alt="user"/>
        </a>
        <div className='post-option'>
          <a href="#">User</a>
          <button 
            className='btn-config'
            onClick={() => handleModal(modal)}
            >
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className='post-img'>
        <img className='img-fluid' src="https://instagram.fhan5-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/97194763_544936269527882_3057431829789631607_n.jpg?_nc_ht=instagram.fhan5-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Xt26O9M2pckAX_UXy_w&oh=675cc69d5e505a368d438517858b0e94&oe=5EE61DF0" />
      </div>
      <div className='post-main'>
        <div className='post-reaction'>
          <div className='post-reaction--left'>
            <button 
              className='btn-config'
              onClick={()=>handleLikeButton(!likeImg)}
              >
              <ion-icon 
                name={likeImg ? "heart-sharp" : "heart-outline"}
                style={likeImg ? {color: "rgb(237, 73, 86)"} : null}
                >
                </ion-icon>
            </button>
            <button className='btn-config' onClick={handleFocusComment}>
              <ion-icon name="chatbubble-outline"></ion-icon>
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
        <div className='post-status'>
          <a href='#'>
            <span>user_name</span>
          </a>
          <span>user_status</span>
        </div>
      </div>
      <div className='post-comment'>
        <form action="POST">
          <textarea 
            ref={textInput} 
            type="text" 
            placeholder='Thêm bình luận...'
            onChange={handleLineBreak}
            ></textarea>
          <button className='btn-config'>Đăng</button>
        </form>
      </div>
    </div>
  );
}

export default PostContent;