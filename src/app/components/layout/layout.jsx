import React from 'react';
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import './layout.scss';

//api
import { logout } from '../../api/global';
import { isAuthenticated } from '../shared/routing/routeGuard';

// needs serious reformatting

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: getNavItem(this.props.location.pathname)
    };
  }

  handleChange = (event, value) => {
    this.setState({
      menuItem: value,
    });
    this.navigateNav(value)
  };

  loadLoginComp = () => {
    this.props.history.push('/login');
  }

  loadRegisterComp = () => {
    this.props.history.push('/register');
  }

  loadUserManagementComp = () => {
    this.props.history.push('/user-management');
  }

  goHome = () => {
    this.props.history.push('');
  }

  logoutUser = () => {
    this.props.history.push('/login');
    logout();
  }

  navigateNav = (value) => {
    switch (value) {
      case 'home':
        this.goHome();
        break;
      case 'login':
        this.loadLoginComp();
        break;
      case 'register':
        this.loadRegisterComp();
        break;
      case 'user-management':
        this.loadUserManagementComp();
        break;
        case 'logout':
        this.logoutUser();
        break;
      default:
        break;
    }
  }

  render() {
    const value = this.state.menuItem;

    if(isAuthenticated()) {
      return (
        <div>
          <AppBar position="static">
            <Paper square>
  
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary">
  
                <Tab label="Home" value="home" />
                <Tab label="User Management" value="user-management" />
                <Tab label="Logout" value="logout" />
  
              </Tabs>
            </Paper>
          </AppBar>
        </div>
      );
    } else {
      return (
        <div>
          <AppBar position="static">
            <Paper square>
  
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary">
                <Tab label="Login" value="login" />
                <Tab label="Register" value="register" />  
              </Tabs>
            </Paper>
          </AppBar>
        </div>
      );
    }
  }
};

// gets nav item corresponding to url
function getNavItem(url) {
  let navItem;
  switch (url) {
    case '/':
      navItem = 'home';
      break;
    case '/register':
      navItem = 'register';
      break;
    case '/login':
      navItem = 'login'
      break;
    case '/user-management':
      navItem = 'user-management'
      break;
      case '/logout':
      navItem = 'user-management'
      break;
    default:
      navItem = null;
      break;
  }
  return navItem;
}
export default withRouter(Layout);

