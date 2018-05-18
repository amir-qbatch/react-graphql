import React, { Component } from 'react';
import Home from '../pages/Home';
import getUsers from '../graphql/queries/user/getUsers';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    console.log('called');
    const { client } = this.props;
    const response = await client.query({
      query: getUsers
    })
    console.log(response, 'response latest');
    if(response) {
      this.setState({users: 
        response.data.getUsers ? 
          response.data.getUsers 
        : {}
      });
    }
  }

  render() {
    return (
      <Home {...this.props} users={this.state.users}/>
    )
  }
};

export default HomeContainer;
