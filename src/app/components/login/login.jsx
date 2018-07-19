import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import '../../../style/styles.css';

export default class Login extends React.Component {


render() {
  
  return (
    <div className={'center'}>
    <span><b>Login</b></span>
    <form noValidate autoComplete="off">

      <div>
        <TextField
          id="email"
          label="email"
          placeholder="Email"
          margin="normal"
        />
      </div>

      <div>
        <TextField
          id="password-input"
          label="Password"
          type="password"
          margin="normal"
        />
      </div>
      <Button variant="contained" color="primary">
        Sign in
      </Button>
    </form>
  </div>
  );
}

}