import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({component: Component, ...rest}) => {
  const token = useSelector(state => state.token)
  return (
    <Route {...rest} render={props => 
        !token
        ? <Component {...props}/>
        : <Redirect to='/' />
      }
    />
  )
};

export default PublicRoute;