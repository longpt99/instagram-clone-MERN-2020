import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import './App.scss'

import Routes from "./routes";
import { actFetchAdminRequest } from 'store/actions';
import HeaderContainer from 'containers/Common/Header';

function App(props) {
  const admin = useSelector(state => state.users.admin);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchAdminRequest());
  }, [dispatch, token]);

  if (token) {
    if(!admin) {
      return <></>
    }
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        {token && <HeaderContainer />}
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
