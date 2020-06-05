import React from "react";
import {
  Switch,
} from "react-router-dom";

import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

import { Login, Register, Home } from '../containers';

const Routes = () => {
  return (
    <Switch>
      {/* <PublicRoute path='/' component={Login} /> */}
      <PublicRoute exact path='/login' component={Login} />
      <PublicRoute exact path='/register' component={Register} />
      {/* <PrivateRoute path='/' component={Home} /> */}
    </Switch>
  )
}

export default Routes;