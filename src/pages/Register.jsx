import React, { Component } from 'react';
import Button from '../components/Button';
import InputField from '../components/Fields';
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

  handleClick = async () => {
    const { client } = this.props;
    const response = await client.mutate({
      mutation: USER_REGISTER,
      variables: this.state
    });
    console.log(response);
    const { registerUser } = response.data;

    if(registerUser && registerUser.status) {
      Cookies.set('token', registerUser.user.token, { expires: 7 });
      this.props.history.push('/login');
    }
  }

  handleChange = (type, e) => {
    this.setState({[type]: e.target.value});
  }

  render() {
    return (
      <div>
        <InputField type='text' handleChange={this.handleChange} name='userName'/>
        <InputField type='text' handleChange={this.handleChange} name='email' />
        <InputField type='password' handleChange={this.handleChange} name='password' />
        <Button type='primary' name='Register' handleClick={this.handleClick} />
      </div>
    )
  }
}

export default Register;
