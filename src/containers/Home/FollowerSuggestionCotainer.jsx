import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {HomeFollowerSuggestion} from '../../components';
import {actFectchSuggestedUsersRequest, actSendFollowUserRequest} from '../../store/actions'

FollowerSuggestionCotainer.propTypes = {
  
};

function FollowerSuggestionCotainer(props) {
  const admin = useSelector(state => state.users.admin);
  const suggestion = useSelector(state => state.users.suggestion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFectchSuggestedUsersRequest());
  }, [])

  function handleClickToFollow() {
    dispatch(actSendFollowUserRequest());
  }

  return <HomeFollowerSuggestion
          adminInfo={admin}
          suggestedUsers={suggestion}
          handleClickToFollow={handleClickToFollow}
        />
}

export default FollowerSuggestionCotainer;