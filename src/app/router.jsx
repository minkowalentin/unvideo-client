import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Login from './components/login/login';
import Register from './components/register/register';
import IndexComponent from './components/home';
import UserManagement from './components/userManagement/userManagement';

 class RouterComponent extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={props => <IndexComponent {...props} />} />
          <Route path="/login" exact  render={props => <Login {...props}/>} />
          <Route path="/register" exact render={props => <Register {...props}/>}  />
          <Route path="/user-management" exact render={props => <UserManagement {...props}/>}  />
        </Switch>
      </div>
    );
  }

}

export default RouterComponent;