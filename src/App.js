import React, { useEffect, Suspense } from "react";
import { Container, Row, Col} from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";

import './App.scss'

import Routes from "./routes";
import { actFetchAdminRequest } from './store/actions';

function App(props) {
  const admin = useSelector(state => state.users.admin);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchAdminRequest());
  }, [token]);

  if (token) {
    if(!admin) {
      return <></>
    }
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
