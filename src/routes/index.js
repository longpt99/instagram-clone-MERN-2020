import React, {lazy} from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { HeaderContainer } from "containers";


const PostContentContainer = lazy(() => import("containers/Common/PostContent"));
const HomePageContainer = lazy(() => import('containers/Pages/Home'));
const AuthPageContainer = lazy(() => import('containers/Pages/Auth'));
const ProfilePageContainer = lazy(() => import('containers/Pages/Profile'));

const Routes = () => {
  return (
    <>
    <Switch>
      <PublicRoute exact path='/login' component={AuthPageContainer} />
      <PublicRoute exact path='/register' component={AuthPageContainer} />
      <PrivateRoute path='/post/:id' component={HomePageContainer}/>
      <PrivateRoute exact path='/' component={HomePageContainer} />
      <PrivateRoute path='/:nickname' component={ProfilePageContainer}/>
    </Switch>
    <Route path='/post/:id' component={PostContentContainer}/>
    </>
  )
}

export default Routes;