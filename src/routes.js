/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import List from './screens/List';
import Login from './screens/Login';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))}
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))}
  />
);

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={List} />
    <LoginRoute path="/login" component={Login} />
  </Switch>
);

export default Routes;
