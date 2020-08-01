import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Routes from 'routes';
import {
  actFetchAdminRequest,
  actResetErr,
  actFetchToken,
} from 'store/actions';
import { getToken } from 'utils';
import { Header } from 'components';

function App() {
  const token = useSelector((state) => state.token.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(actResetErr());
      dispatch(actFetchAdminRequest());
    }
  }, [dispatch, token]);

  useEffect(() => {
    const accessToken = getToken();
    if (accessToken) {
      dispatch(actFetchToken(accessToken));
    }
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        {token && <Header />}
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
