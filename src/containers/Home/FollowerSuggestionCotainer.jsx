import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {HomeFollowerSuggestion} from '../../components';
import {actFetchSuggestedUsersRequest, actSendFollowUserRequest} from '../../store/actions'

FollowerSuggestionCotainer.propTypes = {
  
};

function FollowerSuggestionCotainer(props) {
  const admin = useSelector(state => state.users.admin);
  const suggestion = useSelector(state => state.users.suggestion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchSuggestedUsersRequest());
  }, [suggestion])


  function handleClickFollowButton(id) {
    dispatch(actSendFollowUserRequest(id));
  }

  return <HomeFollowerSuggestion
          adminInfo={admin}
          suggestedUsers={suggestion.slice(0,5)}
          handleClickFollowButton={handleClickFollowButton}
        />
}

export default FollowerSuggestionCotainer;