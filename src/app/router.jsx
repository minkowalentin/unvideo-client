import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Login from './components/login/login';
import Register from './components/register/register';
import IndexComponent from './index';

 class RouterComponent extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact render={props => <IndexComponent {...props} />} />
          <Route path="/login" exact  render={props => <Login {...props}/>} />
          <Route path="/register" exact render={props => <Register {...props}/>}  />
        </Switch>
      </div>
    );
  }

}

export default RouterComponent;