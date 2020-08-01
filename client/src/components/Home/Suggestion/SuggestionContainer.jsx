import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  actFetchSuggestedUsersRequest,
  actSendFollowerRequest,
  actFetchFollowingPostsRequest,
} from 'store/actions';
import Suggestion from './Suggestion';

function SuggestionContainer() {
  const admin = useSelector((state) => state.users.admin);
  const suggestion = useSelector((state) => state.users.suggestion);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchSuggestedUsersRequest());
  }, [dispatch]);

  const handleClickFollowButton = (id) => {
    debugger;
    dispatch(actSendFollowerRequest(id));
    dispatch(actFetchFollowingPostsRequest());
  };

  return (
    <Suggestion
      adminInfo={admin}
      suggestedUsers={suggestion.slice(0, 5)}
      handleClickFollowButton={handleClickFollowButton}
    />
  );
}

export default SuggestionContainer;
