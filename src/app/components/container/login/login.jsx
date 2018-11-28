import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MainHeader from '../../presentation/mainHeader';
import loginUser from '../../../graphql/quries/loginUser';
import { Link } from 'react-router-dom'

//api
import { setInitialLocalStorage } from '../../../api/global';
import errorHandling from '../../../api/errorHandling'


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
        //error
      }, (graphQLErrors, networkError) => {
        if (graphQLErrors) {
          errorHandling.graphiqlError(graphQLErrors);
        }
        if (networkError) {
          errorHandling.networkError(networkError)
        }

      })
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  onSuccesfullLogin = ({ loginUser }) => {
    setInitialLocalStorage(loginUser.token, loginUser.id);
    this.props.history.push("/");
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
          <p><Link to={`/register`} className={"comment link"}>Create Account</Link></p>
        </form>
      </div>
    );
  }

}