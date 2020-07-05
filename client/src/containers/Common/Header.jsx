import React, {useState, useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Header } from 'components/Common';
import { actDeleteToken, actFetchSearchResultRequest, actUserLogout, actResetSearchUsers } from 'store/actions';

HeaderContainer.propTypes = {
  
};

function HeaderContainer(props) {
  const admin = useSelector(state => state.users.admin);
  const searchUsers = useSelector(state => state.users.search);
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);
  const [textInput, setTextInput] = useState('');
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    setFocus(false);
    setTextInput('')
    dispatch(actResetSearchUsers());
  }, [dispatch, pathname])

  const handleLogoutClick = () => {
    dispatch(actDeleteToken());
    dispatch(actUserLogout());
  }

  const handleBackToHomePage = () => {
    if (pathname === '/') {
      window.scrollTo(0, 0);
    }
  }

  const handleFocusSearchInput = () => {
    setFocus(true)
  }

  const handleBlurSearchInput = (e) => {
    if (e.target.value.length === 0) {
      setFocus(false)
      return;
    }
    // dispatch(actResetSearchUsers())
  }

  const handleChangeTextInput = (e) => {
    const {value} = e.target;
    setTextInput(value)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      dispatch(actFetchSearchResultRequest(value));
    }, 300)
  }

  const handleClearSearchInput = () => {
    setTextInput('');
  }

  return (
    <Header
      users={searchUsers}
      adminInfo={admin}
      isFocus={isFocus}
      textInput={textInput}
      handleChangeTextInput={handleChangeTextInput}
      handleBackToHomePage={handleBackToHomePage}
      handleLogoutClick={handleLogoutClick}
      handleFocusSearchInput={handleFocusSearchInput}
      handleBlurSearchInput={handleBlurSearchInput}
      handleClearSearchInput={handleClearSearchInput}
    />
  );
}

export default HeaderContainer;