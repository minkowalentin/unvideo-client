import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Mutation } from "react-apollo";

import MainHeader from '../../presentation/mainHeader';
import { CREATE_USER_MUTATION, GET_ALL_USERS_QUERY } from '../../../graphql/users.graphql';

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
    };
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '', username: '', repeatPassword: '' });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleRepeatPasswordChange = (e) => {
    this.setState({ repeatPassword: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <Mutation 
      mutation={CREATE_USER_MUTATION}
      update = {(cache, {data: {createUser}}) => {
        try {
          const {getAllUsers}= cache.readQuery({query: GET_ALL_USERS_QUERY});
          cache.writeQuery({
            query: GET_ALL_USERS_QUERY,
            data: {getAllUsers: getAllUsers.concat([createUser]) }
          })
        } catch (error) {
          console.log('Not updating cache because it dosen\'t exist.');
        }
      }}
      >

        {(createUser, { loading, error }) => (
          <div>
            <MainHeader header="Register"></MainHeader>

            <form noValidate autoComplete="off" onSubmit={
              e => {
                createUser({
                  variables: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                  }
                })
                  .then(
                    this.handleSubmit(e)
                  );
              }
            }>

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
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
          </div>
        )}
      </Mutation>
    );
  }

}

