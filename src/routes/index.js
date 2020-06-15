import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Home, HeaderContainer, AuthPageContainer, ProfilePageContainer } from '../containers';
// import {AuthPage, ProfilePage} from '../pages';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/login' component={AuthPageContainer} />
      <PublicRoute exact path='/register' component={AuthPageContainer} />
      <Route>
        <HeaderContainer />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute path='/:nickname' component={ProfilePageContainer}/>
      </Route>
    </Switch>
  )
}

export default Routes;