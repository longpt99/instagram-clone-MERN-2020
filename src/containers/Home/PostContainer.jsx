import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {actFetchFollowingPostsRequest, actPostCommentRequest, actFetchCommentPostRequest} from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Post from 'components/Home/Post';

PostContianer.propTypes = {
  
};

function PostContianer(props) {
  const [isLiked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const posts = useSelector(state => state.posts.followingPost);
  const [postId, setPostId] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actFetchFollowingPostsRequest());
  }, [posts])

  const handleShowModal = (value) => {
    props.handleModal(true)
  }

  const handleClickLikeImage = () => {
    setLiked(!isLiked);
  }

  const handleChangeCommmentInput = (e) => {
    const {value} = e.target;
    setComment(value);
  }

  const handleFocusTextarea = (id) => {
    setPostId(id)
  }

  const hanldeSubmitComment = (e) => {

    e.preventDefault();
    setComment('')
    dispatch(actPostCommentRequest({content: comment.trim(), postId}))
  }

  const hanldeEnterSubmitComment = (e) => {
    console.log(comment.trim().length)
    if (e.keyCode === 13) {
      if (comment.trim().length > 0) {
        hanldeSubmitComment(e)
        return;
      }
      return setComment('')
    }
  }


  return <Post
    posts={posts}
    isLiked={isLiked}
    comment={comment}
    handleClickLikeImage={handleClickLikeImage}
    hanldeSubmitComment={hanldeSubmitComment}
    handleChangeCommmentInput={handleChangeCommmentInput}
    handleFocusTextarea={handleFocusTextarea}
    hanldeEnterSubmitComment={hanldeEnterSubmitComment}
  />
}

export default React.memo(PostContianer);