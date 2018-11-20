import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Login from './components/login/login';
import Register from './components/register/register';
import IndexComponent from './components/home';
import UserManagement from './components/userManagement/userManagement';
import { PrivateRoute } from './components/shared/routing/pirvateRoute';



 class RouterComponent extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={props => <IndexComponent {...props} />} />
          <Route path="/login" exact  render={props => <Login {...props}/>} />
          <Route path="/register" exact render={props => <Register {...props}/>}  />
          <PrivateRoute path="/user-management" component={UserManagement}  />
        </Switch>
      </div>
    );
  }

}

export default RouterComponent;