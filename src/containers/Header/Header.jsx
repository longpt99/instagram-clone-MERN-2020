import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Header/Navbar';

import {actDeleteToken} from '../../store/actions'
import { useState } from 'react';

HeaderContainer.propTypes = {
  
};

function HeaderContainer(props) {
  const admin = useSelector(state => state.users.admin);
  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState(false);

  function handleLogoutClick() {
    dispatch(actDeleteToken());
  }

  function handleOptionClick() {
    setShowOption(!showOption)
  }

  return (
    <Navbar
      handleLogoutClick={handleLogoutClick}
      handleOptionClick={handleOptionClick}
      adminInfo={admin}
      showOption={showOption}
    />
  );
}

export default HeaderContainer;