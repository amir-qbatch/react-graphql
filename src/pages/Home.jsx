import React, {Component} from 'react';
import { Layout } from 'antd';
import BreadCrumbs from '../components/BreadCrumbs';
import getUsers from '../graphql/queries/user/users';
import './home/home.css';

import { Query, Mutation } from "react-apollo";

export default class Home extends Component {

  render() {
    const { Content } = Layout;
    
    return (
      <Query query={getUsers} errorPolicy="all">
      {
        ({loading, error, data}) => {

          if(error) return `errordsd ${error.networkError}`;
          if(loading) return `Loading`;

          return (
            <div className="home-container">
              <div className="content">
              {  
                data.getUsers.map(user => (
                  <h1 key={user.name}>
                    {`${user.name}, ${user.age}`}
                  </h1>
                ))
              }
              </div>
            </div>
          )
        }
      }
      </Query>
    );
  };
};
