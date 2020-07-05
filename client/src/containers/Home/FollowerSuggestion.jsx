import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {actFetchSuggestedUsersRequest, actSendFollowerRequest, actFetchFollowingPostsRequest} from 'store/actions'
import { FollowerSuggestion } from 'components/Home';

FollowerSuggestionContainer.propTypes = {
  
};

function FollowerSuggestionContainer(props) {
  const admin = useSelector(state => state.users.admin);
  const suggestion = useSelector(state => state.users.suggestion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchSuggestedUsersRequest());
  }, [dispatch])

  function handleClickFollowButton(id) {
    dispatch(actSendFollowerRequest(id));
    dispatch(actFetchFollowingPostsRequest());
  }

  return <FollowerSuggestion
          adminInfo={admin}
          suggestedUsers={suggestion.slice(0,5)}
          handleClickFollowButton={handleClickFollowButton}
        />
}

export default FollowerSuggestionContainer;