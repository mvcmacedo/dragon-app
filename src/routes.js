/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import List from './screens/List';
import Login from './screens/Login';
import Edit from './screens/Edit';
import New from './screens/New';
import Detail from './screens/Detail';

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
    <PrivateRoute exact path="/criar" component={New} />
    <PrivateRoute exact path="/detalhe/:id" component={Detail} />
    <PrivateRoute exact path="/editar/:id" component={Edit} />
    <LoginRoute path="/login" component={Login} />
  </Switch>
);

export default Routes;
