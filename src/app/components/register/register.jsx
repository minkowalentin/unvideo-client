import React from 'react';
import 'typeface-roboto';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import '../../../style/styles.css';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    } ;
  }

  handleSubmit = (e) => {
    console.log("Email: " + this.state.email);
    console.log("Password: " + this.state.password);
    e.preventDefault();
    this.setState({email: '' ,password: ''});

  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  
  render() {
    return (
      <div className={'center'}>
        <span><b>Register</b></span>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

          <div>
            <TextField
              id="email"
              label="email"
              placeholder="Email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          <div>
            <TextField
              id="password-input"
              label="Password"
              type="password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <Button variant="contained" color="primary" type="submit" value="Submit">
            Sign up
          </Button>
        </form>
      </div>
    );
  }

}

// onChange={this.handleChange('name')}
