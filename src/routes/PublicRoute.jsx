import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({component: Component, ...rest}) => {
  const {token} = rest;
  console.log(token)
  return (
    <Route
      {...rest}
      render={props => 
        !token
        ? <Component {...props}/>
        : <Redirect to='/' />
      }
    />
  )
};

const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps, null)(PublicRoute);