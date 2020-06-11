import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import { Login, Register, Home, Header, Profile } from '../containers';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path='/login' component={Login} />
      <PublicRoute exact path='/register' component={Register} />
      <Route>
        <Header />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/:nickname' component={Profile} />
      </Route>
    </Switch>
  )
}

export default Routes;