import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MainHeader from '../shared/mainHeader';

export default class Login extends React.Component {


  render() {

    return (
      <div className={'center'}>
      
        <MainHeader header="Login"></MainHeader>
        <form noValidate autoComplete="off">

          <div>
            <TextField
              id="email"
              label="email"
              margin="normal"
            />
          </div>

          <div>
            <TextField
              id="password-input"
              label="password"
              type="password"
              margin="normal"
            />
          </div>
          <Button variant="contained" color="primary">
            Sign in
      </Button>
          <p className={"comment link"}>Create Account</p>
        </form>
      </div>
    );
  }

}