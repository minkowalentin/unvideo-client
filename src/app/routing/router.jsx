import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './routeGuard';

// components
import Login from '../components/login/login';
import Register from '../components/register/register';
import IndexComponent from '../components/presentation/home';
import UserManagement from '../components/userManagement/userManagement';
import { PrivateRoute } from './pirvateRoute';


class RouterComponent extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" exact render={props => (
            isAuthenticated() === false ?
              <Login {...props} /> :
              <Redirect to='/' {...props} />
          )} />
          <Route path="/" exact render={props => (
            <IndexComponent {...props} />)} />
          <Route path="/login" exact render={props => (
            isAuthenticated() === false ?
              <Login {...props} /> :
              <Redirect to='/' {...props} />
          )} />
          <Route path="/register" exact render={props => (
            isAuthenticated() === false ?
              <Register {...props} /> :
              <Redirect to='/' {...props} />
          )} />
          <PrivateRoute path="/user-management" component={UserManagement} />
        </Switch>
      </div>
    );
  }

}

export default RouterComponent;