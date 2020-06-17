import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {HomePost} from '../../components'
import {actFetchFollowingPostsRequest, actPostCommentRequest, actFetchCommentPostRequest} from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useMemo } from 'react';

PostContianer.propTypes = {
  
};

function PostContianer(props) {
  const [isLiked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const posts = useSelector(state => state.posts);
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


  return <HomePost
    posts={posts}
    isLiked={isLiked}
    comment={comment}
    handleClickLikeImage={handleClickLikeImage}
    hanldeSubmitComment={hanldeSubmitComment}
    handleChangeCommmentInput={handleChangeCommmentInput}
    handleFocusTextarea={handleFocusTextarea}
  />
}

export default PostContianer;