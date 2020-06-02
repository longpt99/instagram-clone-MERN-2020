import React from "react";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";

import PublicRoute from './publicRoute';

import { Login, Register } from '../containers';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute eaxct path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;