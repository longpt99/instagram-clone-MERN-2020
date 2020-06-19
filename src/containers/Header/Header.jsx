import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

import {actDeleteToken} from '../../store/actions'
import { useState } from 'react';
import { useRouteMatch, Redirect } from 'react-router-dom';

HeaderContainer.propTypes = {
  
};

function HeaderContainer(props) {
  const admin = useSelector(state => state.users.admin);
  const {url} = useRouteMatch();
  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState(false);

  const handleLogoutClick = () => {
    dispatch(actDeleteToken());
  }

  const handleOptionClick = () => {
    setShowOption(!showOption)
  }

  const handleBackToHomePage = () => {
    if (url === '/') {
      window.scrollTo(0, 0);
    }
  }

  return (
    <Navbar
      handleBackToHomePage={handleBackToHomePage}
      handleLogoutClick={handleLogoutClick}
      handleOptionClick={handleOptionClick}
      adminInfo={admin}
      showOption={showOption}
    />
  );
}

export default HeaderContainer;