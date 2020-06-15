import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {HomeFollowerSuggestion} from '../../components';

FollowerSuggestionCotainer.propTypes = {
  
};

function FollowerSuggestionCotainer(props) {
  const admin = useSelector(state => state.users.admin)

  return <HomeFollowerSuggestion adminInfo={admin}/>
}

export default FollowerSuggestionCotainer;