import React, {lazy} from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { HeaderContainer} from '../containers';

const HomePageContainer = lazy(() => import('../containers/Pages/Home'));
const AuthPageContainer = lazy(() => import('../containers/Pages/Auth'));
const ProfilePageContainer = lazy(() => import('../containers/Pages/Profile'));

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/login' component={AuthPageContainer} />
      <PublicRoute exact path='/register' component={AuthPageContainer} />
      <Route>
        <HeaderContainer />
        <PrivateRoute exact path='/' component={HomePageContainer} />
        <PrivateRoute path='/:nickname' component={ProfilePageContainer}/>
      </Route>
    </Switch>
  )
}

export default Routes;