import React, { Component } from 'react';
import App from '../layouts/App.jsx';
import AppHOC from '../hoc/AppHOC';

class AppContainer extends Component {
  render() {
    return (
      <App {...this.props}/>
    )
  }
};

export default AppHOC(AppContainer);
