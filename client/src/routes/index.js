import React, { lazy, useRef, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PostContentContainer from 'containers/Common/PostContent';
import { SuggestedUsersContainer } from 'containers';

// const HomePageContainer = lazy(() => import('containers/Pages/Home'));
const AuthPage = lazy(() => import('pages/Auth'));
const HomePage = lazy(() => import('pages/Home'));
const ProfilePage = lazy(() => import('pages/Profile'));

const Routes = () => {
  const isFirstRender = useRef(true);
  const location = useLocation();
  let [prevLocation, setPrevLocation] = useState(location);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!(location.state && location.state.modal)) {
      setPrevLocation(location);
    }
  }, [location]);

  const isModal =
    location.state && location.state.modal && prevLocation !== location;

  return (
    <>
      <Switch location={isModal ? prevLocation : location}>
        <PublicRoute exact path="/login" component={AuthPage} />
        <PublicRoute exact path="/register" component={AuthPage} />

        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/:nickname" component={ProfilePage} />
        <PrivateRoute
          exact
          path="/posts/:id"
          component={PostContentContainer}
          isModal={isModal}
        />
        <PrivateRoute
          exact
          path="/explore/people/suggestion"
          component={SuggestedUsersContainer}
        />
      </Switch>
      {isModal ? (
        <Route exact path="/posts/:id">
          <PostContentContainer isModal={isModal} />
        </Route>
      ) : null}
    </>
  );
};

export default Routes;
