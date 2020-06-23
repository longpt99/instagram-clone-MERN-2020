import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import Navbar from '../../components/Header/Navbar';
import { actDeleteToken } from 'store/actions';

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