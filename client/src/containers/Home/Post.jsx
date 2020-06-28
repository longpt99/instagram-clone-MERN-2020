import React, {useState, useEffect} from 'react';
// import PropTypes from 'prop-types';

import {actFetchFollowingPostsRequest, actPostCommentRequest, actReactionPostRequest, actUnlikePostRequest} from 'store/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Post } from 'components/Home';

PostContianer.propTypes = {
  
};

function PostContianer(props) {
  const dispatch = useDispatch();
  const adminId = useSelector(state => state.users.admin._id);
  const posts = useSelector(state => state.posts.followingPost);
  const [comment, setComment] = useState('');
  const [postId, setPostId] = useState('');
  
  useEffect(() => {
    dispatch(actFetchFollowingPostsRequest());
  }, [dispatch, posts])

  const handleClickLikeImage = (id) => {
    dispatch(actReactionPostRequest(id))
  }

  const handleClickUnlikeImage = (id) => {
    dispatch(actUnlikePostRequest(id));
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
    adminId={adminId}
    posts={posts}
    comment={comment}
    handleClickLikeImage={handleClickLikeImage}
    handleClickUnlikeImage={handleClickUnlikeImage}
    hanldeSubmitComment={hanldeSubmitComment}
    handleChangeCommmentInput={handleChangeCommmentInput}
    handleFocusTextarea={handleFocusTextarea}
    hanldeEnterSubmitComment={hanldeEnterSubmitComment}
  />
}

export default React.memo(PostContianer);