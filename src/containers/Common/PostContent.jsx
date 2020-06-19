import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostContent from 'components/Common/PostContent';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchPostRequest, actFetchFollowingPostsRequest } from 'store/actions';
import { useState } from 'react';

PostContentContainer.propTypes = {
  
};

function PostContentContainer(props) {
  const post = useSelector(state => state.posts.post);
  const dispatch = useDispatch()
  let { id } = useParams();
  
  useEffect(() => {
      dispatch(actFetchPostRequest(id));
  }, [])

  return <PostContent postContent={post}/>;
}

export default React.memo(PostContentContainer);