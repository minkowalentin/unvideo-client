import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    } ;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({email: '' ,password: ''});

  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleRepeatPasswordChange = (e) => {
    this.setState({repeatPassword: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }
  
  render() {
    return (
      <div className={'center'}>
        <span><b>Register</b></span>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

          <div>
            <TextField
              id="username"
              label="username"
              margin="normal"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div>
            <TextField
              id="email"
              label="email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          <div>
            <TextField
              id="password-input"
              label="password"
              type="password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>

              <div>
            <TextField
              id="repeat-password-input"
              label="repeat password"
              type="password"
              margin="normal"
              value={this.state.repeatPassword}
              onChange={this.handleRepeatPasswordChange}
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
