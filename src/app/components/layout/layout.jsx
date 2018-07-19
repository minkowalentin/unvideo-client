import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import './layout.css';

export class Layout extends React.Component {

  loadLoginComp = () => {
    this.props.history.push('/login');
  }

  loadRegisterComp = () => {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className={'layout-container'}>
        <div className={'button-container'}>
          <Button
            variant='outlined'
            color='primary'
            onClick={this.loadLoginComp}>
            Login
          </Button>
        </div>

        <div className={'button-container'}>
          <Button
            variant='outlined'
            color='secondary'
            onClick={this.loadRegisterComp}>
              Register
            </Button>
        </div>
      </div>
    );
  }

}

export default withRouter(Layout);

