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
      <PublicRoute exact path='/login' component={Login} />
      <PublicRoute exact path='/register' component={Register} />
      <PrivateRoute exact path='/' component={Home} />
    </Switch>
  )
}

export default Routes;