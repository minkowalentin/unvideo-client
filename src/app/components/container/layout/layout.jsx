import React from 'react';
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import './layout.scss';

//api
import { logout } from '../../../api/global';
import { isAuthenticated } from '../../../routing/routeGuard';


//components
// import MenuTab from '../../presentation/menuTab';
// needs serious reformatting

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
    };
  }

  componentWillMount() {
    // gets current page location
    this.setState({ activeTab: this.props.location.pathname });
  }



  handleChange = (event, link) => {
    if (link === '/logout') {
      this.logoutUser();
    } else {
      this.setState({
        activeTab: link,
      });
      this.navigateNav(link)
    }
  };

  handleExternalChange = (link) => {
    this.setState({
      activeTab: link,
    });
  }

  navigateNav = (link) => {
    this.props.history.push(link);
  }

  logoutUser = () => {
    logout();
    this.setState({
      activeTab: '/login',
    });
    this.props.history.push('/login');
  }
// child to parrent
  render() {
    return (
      <div>
        <AppBar position="static">
          <Paper square>
            <Tabs
              value={this.state.activeTab}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
           >
              {isAuthenticated() && <Tab label="Home" value="/" />}
              {isAuthenticated() && <Tab label="User Management" value="/user-management" />}
              {isAuthenticated() && <Tab label="Logout" value="/logout" />}
              {!isAuthenticated() && <Tab label="Login" value="/login" />}
              {!isAuthenticated() && <Tab label="Register" value="/register" />}
            </Tabs>
          </Paper>
        </AppBar>
      </div>
    );
  }
};

export default withRouter(Layout);

