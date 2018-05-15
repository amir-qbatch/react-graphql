import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Button from '../components/Button';
import InputField from '../components/Fields';
import { onError } from "apollo-link-error";
import * as Cookies from "js-cookie";

import USER_REGISTER from '../graphql/mutations/user/register';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      password: ''
    }
  }

  handleClick = async (registerUser) => {
    const user = await registerUser({variables: this.state});

    if(user && user.data.registerUser.status) {
      Cookies.set('token', user.data.registerUser.user.token, { expires: 7 });
      this.props.history.push('/login');
    }
  }

  handleChange = (type, e) => {
    this.setState({[type]: e.target.value});
  }

  render() {
    return(
      <Mutation mutation={USER_REGISTER} errorPolicy="all" onError={(({ graphQLErrors, networkError }) => { console.log(networkError.message) })}>
        {(registerUser, {User}) => {
          return(
            <div>
              <InputField type='text' handleChange={this.handleChange} name='userName'/>
              <InputField type='text' handleChange={this.handleChange} name='email' />
              <InputField type='password' handleChange={this.handleChange} name='password' />
              <Button type='primary' name='Register' handleClick={this.handleClick} registerUser={registerUser}/>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default Register;
