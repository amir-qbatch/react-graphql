import React, {Component} from 'react';
import './home/home.css';

export default class Home extends Component {
  render() {

    const { users } = this.props;
    
    return (
      <div className="home-container">
        <div className="content">
        { 
          users.map(user => (
            <h1 key={user.email}>
              {`${user.email}, ${user.userName}`}
            </h1>
          ))
        }
        </div>
      </div>
    )
  };
};
