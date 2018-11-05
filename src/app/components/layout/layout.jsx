import React from 'react';
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import './layout.scss';

export class Layout extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });

    console.log(value);

    switch (value) {

      // Home
      case 0:
      this.goHome();
        break;
      // Login
      case 1:
      this.loadLoginComp();
        break;
      // Register  
      case 2:
      this.loadRegisterComp();
      break;
      default:
        break;
    }
  };

  loadLoginComp = () => {
    this.props.history.push('/login');
  }

  loadRegisterComp = () => {
    this.props.history.push('/register');
  }

  goHome = () => {
    this.props.history.push('');
  }
  
  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static">
        <Paper square>

          <Tabs
          value={value} 
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary">
          
            <Tab label="Home" /> 
            <Tab label="Login" />
            <Tab label="Register" />
            
          </Tabs>
          </Paper>
        </AppBar>
      </div>
    );
  }
};

export default withRouter(Layout);

