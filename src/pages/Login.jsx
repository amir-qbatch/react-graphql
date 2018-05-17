import React, { Component } from 'react'
import { Form, Button } from 'antd';
import { Mutation } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import * as Cookies from "js-cookie";
import InputField from '../components/Fields';
import USER_LOGIN from '../graphql/mutations/user/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async(userLogin) => {
    const data = {
      ...this.state,
      token: Cookies.get('token')
    }
    const user = await userLogin({variables: data});
    if(user.data.loginUser.status) {
      this.props.history.push('/');
    }
    console.log(user);
  }

  handleChange = (type, e) => {
    this.setState({[type]: e.target.value});
  }

  render() {
    const FormItem = Form.Item;

    return (
      <Mutation mutation={USER_LOGIN} onError={({ graphQLErrors, networkError }) => console.log(networkError, graphQLErrors)}>
        {(userLogin, {User}) => {
          return(
            <div>
              <InputField handleChange={this.handleChange} name='email' type='text' />
              <InputField handleChange={this.handleChange} name='password' type='password' />
              <LoginButton
                FormItem={FormItem} 
                handleSubmit={this.handleSubmit} 
                userLogin={userLogin}
                text={{remember: 'Remember me', forgot: 'Forgot password', login: 'Login', or: 'or', register: 'register now!'}}
                routeName='/Register'
              />
            </div>
          )
        }}
      </Mutation>
    );
  }
}

const LoginButton = ({handleSubmit, text, route, FormItem, userLogin}) => (
  <FormItem style={{ width: '17%'}}>
    <Button type="primary" htmlType="submit" onClick={() => handleSubmit(userLogin)} className="login-form-button">
      {text.login}
    </Button>
    <div>
      {text.or} <NavLink to='/Register'>{text.register}</NavLink> &nbsp; &nbsp;
      <a className="login-form-forgot" href="">{text.forgot}</a>
    </div>
  </FormItem>
)

export default Login;
