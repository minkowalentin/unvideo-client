import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MainHeader from '../shared/mainHeader';
import loginUser from '../shared/quries/loginUser';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    // try to log in user
    loginUser(this.state.email, this.state.password)
      .then((value) => {
        // success
        this.onSuccesfullLogin(value);
      }, (error) => {
        // error
        this.onFailedLogin(error);
      })
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  onSuccesfullLogin = ({loginUser}) => {
    // set local storage
    localStorage.setItem('token', loginUser.token);
    localStorage.setItem('id', loginUser.id);
    alert('you have logged in!')
  }

  onFailedLogin = (errorData) => {
    console.log('Error', errorData);
    alert('Ye failed');
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {

    return (
      <div className={'center'}>
        <MainHeader header="Login"></MainHeader>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

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
          <Button variant="contained" color="primary" type="submit" value="Submit">
            Sign in
      </Button>
          <p className={"comment link"}>Create Account</p>
        </form>
      </div>
    );
  }

}