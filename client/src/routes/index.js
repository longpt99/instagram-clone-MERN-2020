import React, {lazy, useRef, useEffect, useState} from "react";
import { Switch, Route, useLocation} from "react-router-dom";

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PostContentContainer from "containers/Common/PostContent";

const HomePageContainer = lazy(() => import('containers/Pages/Home'));
const AuthPageContainer = lazy(() => import('containers/Pages/Auth'));
const ProfilePageContainer = lazy(() => import('containers/Pages/Profile'));

const Routes = (props) => {
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

  const isModal = (
    location.state &&
    location.state.modal &&
    prevLocation !== location
  );

  return (
    <>
    <Switch location={isModal ? prevLocation : location}>
      <PublicRoute exact path='/login' component={AuthPageContainer} />
      <PublicRoute exact path='/register' component={AuthPageContainer} />
      <PrivateRoute exact path='/' component={HomePageContainer} />
      <PrivateRoute exact path='/:nickname' component={ProfilePageContainer} />
      <PrivateRoute exact path='/post/:id' component={PostContentContainer} isModal={isModal}/>} />
    </Switch>
    {isModal
      ? <Route exact path="/post/:id"><PostContentContainer isModal={isModal}/></Route>
      : null
    }
    </>
  )
}

export default Routes;