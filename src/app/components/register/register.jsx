import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom'
import MainHeader from '../presentation/mainHeader';
import { CREATE_USER_MUTATION, GET_ALL_USERS_QUERY } from '../../graphql/users.graphql';


//api
import errorHandling from '../../api/errorHandling'

export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      userCreated: false
    };
  }

  componentDidMount() {
    // custom form rule for mathcing passwords
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });

    // custom form rule for string length
    ValidatorForm.addValidationRule('stringLengthEnough', (value) => {
      if (value.length >= 6) {
        return true;
      }
      if (value.length === 0) {
        return true;
      }
      return false;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  clearForm = () => {
    if (this.state.userCreated) {
      this.setState({ email: '', password: '', username: '', repeatPassword: '', instantValidate: false });
    }
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
        update={(cache, { data: { createUser } }) => {
          if (createUser) {
            this.setState({
              userCreated: true
            })
          } else {
            this.setState({
              userCreated: false
            })
          }
          this.clearForm();
          
          try {
            const { getAllUsers } = cache.readQuery({ query: GET_ALL_USERS_QUERY });
            cache.writeQuery({
              query: GET_ALL_USERS_QUERY,
              data: { getAllUsers: getAllUsers.concat([createUser]) }
            })
          } catch (error) {
            console.log('Not updating cache because it dosen\'t exist.');
          }
        }}
      >

        {(createUser, { loading, error }) => (
          <div>
            <MainHeader header="Register"></MainHeader>

            <ValidatorForm
              ref={r => this.form = r}
              autoComplete="off"
              debounceTime={80}
              onSubmit={
                e => {
                  createUser({
                    variables: {
                      username: this.state.username,
                      email: this.state.email,
                      password: this.state.password
                    }
                  })
                    .then(
                      this.handleSubmit(e),
                    );
                }

              }>

              <div>
                <TextValidator
                  id="username"
                  name="username"
                  label="username"
                  margin="normal"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  validators={['required', 'maxStringLength: 20', 'stringLengthEnough']}
                  errorMessages={['This field is required', 'Username is too long', 'Username is too short.']}
                />
              </div>

              <div>
                <TextValidator
                  id="email"
                  label="email"
                  name="email"
                  margin="normal"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  validators={['required', 'isEmail']}
                  errorMessages={['This field is required', 'Email is not valid']}
                />
              </div>

              <div>
                <TextValidator
                  id="password-input"
                  label="password"
                  type="password"
                  name="password"
                  margin="normal"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  validators={['stringLengthEnough', 'maxStringLength: 50', 'required']}
                  errorMessages={['Password is too short', 'Password is too long', 'This field is required']}
                />
              </div>

              <div>
                <TextValidator
                  id="repeat-password-input"
                  label="repeat password"
                  type="password"
                  name="confirmPassword"
                  margin="normal"
                  value={this.state.repeatPassword}
                  onChange={this.handleRepeatPasswordChange}
                  validators={['isPasswordMatch', 'required']}
                  errorMessages={['Passwords don\'t match', 'This field is required']}
                />
              </div>
              <Button variant="contained" color="primary" type="submit" value="Submit">
                Sign up
          </Button>
            </ValidatorForm>

            {loading && <p>Loading...</p>}

            {/* Error message */}
            {error && <p>{errorHandling.formatErrorMessage(error)}</p>}

            {/* Success message */}
            {this.state.userCreated && !error &&
              <div className={"margin-s"}>
                <span className={"success-comment"}>User created succesfully. Now you can </span>
                <Link to={`/login`} className={"success-comment link"}>login</Link> <span>.</span>
              </div>
            }

          </div>
        )}
      </Mutation>
    );
  }

}

