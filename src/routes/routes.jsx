import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//containers
import AppContainer from '../containers/AppContainer';
import HomeContainer from '../containers/HomeContainer';
//pages
// import Home from '../pages/Home';
import Book from '../pages/Book';
import Login from '../pages/Login';
import Register from '../pages/Register';
// import App from '../layouts/App';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Switch>   
            <Route exact path='/' render={props => <AppRoute Component={HomeContainer} Layout={AppContainer} props={props} />} />
            <Route exact path='/book/new' render={props => <AppRoute Component={Book} Layout={AppContainer} props={props} />} />
            <Route exact path='/login' render={props => <AppRoute Component={Login} Layout={AppContainer} props={props} />} />
            <Route exact path='/register' render={props => <AppRoute Component={Register} Layout={AppContainer} props={props} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes;

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  } else if (!Component){
      return <Layout {...props} />;
  } else {
    return <Component {...props} />;
  }
};
