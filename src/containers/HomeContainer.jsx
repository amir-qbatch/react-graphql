import React, { Component } from 'react';
import Home from '../pages/Home';
import getUsers from '../graphql/queries/user/getUsers';
import getUsersCount from '../graphql/queries/user/getUsersCount';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      skip: 0,
      limit: 10,
      total: 0
    }
  }

  onChange = async (page, pageSize) => {
    const { client } = this.props;
    const response = await client.query({
      query: getUsers,
      variables: {
        first: (page-1)*10, 
        offset: pageSize
      },
      fetchPolicy: 'network-only'
    })
    if(response) {
      this.setState({users: 
        response.data.getUsers ? 
          response.data.getUsers 
        : []
      });
    }
  }

  async componentDidMount() {
    const { client } = this.props;
    const {skip, limit} = this.state;

    let response = await client.query({
      query: getUsers,
      variables: {
        first: skip, 
        offset: limit
      },
      fetchPolicy: 'network-only'
    })
    if(response) {
      this.setState({users: 
        response.data.getUsers ? 
          response.data.getUsers 
        : {}
      });
    }

    response = await client.query({
      query: getUsersCount,
      fetchPolicy: 'network-only'
    })
    if(response) {
      this.setState({total: 
        response.data.getUsersCount ? 
          response.data.getUsersCount.count 
        : 10
      });
    }
  }

  render() {
    return (
      <Home {...this.props} onChange={this.onChange} onShowSizeChange={this.onShowSizeChange} {...this.state}/>
    )
  }
};

export default HomeContainer;
