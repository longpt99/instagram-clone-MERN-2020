import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Modal from '../Modal';

Post.propTypes = {
  
};

function Post(props) {
  const textInput = React.createRef();
  const [likeImg, setLikeImg] = useState(false);
  
  function handleShowModal(value) {
    props.handleModal(true)
  }

  function handleClickButton(value){
    setLikeImg(!likeImg);
  }

  function handleFocusComment() {
    textInput.current.focus();
  }

  return (
    <div className='post-content'>
      <header className='post-user'>
        <a className='post-user-avatar' href="#">
          <img src="https://loremflickr.com/30/30" alt="user"/>
        </a>
        <div className='post-user-option'>
          <a href="#" className='post-user-nickname'>
            <span>name</span>
          </a>
          <button className='btn-config' onClick={handleShowModal}>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </button>
        </div>
      </header>
      <div className='post-imgage'>
        <img className='img-fluid' src="https://instagram.fhan5-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/97194763_544936269527882_3057431829789631607_n.jpg?_nc_ht=instagram.fhan5-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Xt26O9M2pckAX_UXy_w&oh=675cc69d5e505a368d438517858b0e94&oe=5EE61DF0" />
      </div>
      <div className='post-primary'>
        <div className='post-reaction'>
          <div className='post-reaction--left'>
            <button className='btn-config'>
              <ion-icon 
                name={likeImg ? "heart-sharp" : "heart-outline"}
                style={likeImg ? {color: "rgb(237, 73, 86)"} : null}
                onClick={handleClickButton}
                >
                </ion-icon>
            </button>
            <button className='btn-config'>
              <ion-icon name="chatbubble-outline" onClick={handleFocusComment}></ion-icon>
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
        <div className='post-caption'>
          <a href='#'>
            <span>user_name</span>
          </a>
          <span>user_status</span>
        </div>
      </div>
      <div className='post-comment'>
        <form className='post-comment__form'>
          <textarea
            ref={textInput} 
            type="text" 
            placeholder='Thêm bình luận...'
          >
          </textarea>
          <button className='btn-config'>Đăng</button>
        </form>
      </div>
    </div>
  );
}

export default Post;