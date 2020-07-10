import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actFetchPostRequest } from 'store/actions';
import PostContent from 'components/Common/PostContent';
import Modal from 'components/Common/Modal';

PostContentContainer.propTypes = {
  
};

function PostContentContainer(props) {
  const {isModal} = props;
  const post = useSelector(state => state.posts.post);
  const history = useHistory()
  const dispatch = useDispatch();
  let { id } = useParams();
  
  useEffect(() => {
      dispatch(actFetchPostRequest(id));
  }, [dispatch, id])

  const handleClickOutModal = (e) => {
    return history.push('/')
  }

  return (
    <Modal isModal={isModal}>
      <PostContent post={post} handleClickOutModal={handleClickOutModal}/>;
    </Modal>
  )
}

export default PostContentContainer;