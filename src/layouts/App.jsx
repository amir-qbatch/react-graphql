import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { Layout } from 'antd';
import gql from "graphql-tag";
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import BreadCrumbs from '../components/BreadCrumbs';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      user: {}
    };
  }
  componentWillMount() {
    const val = 5;
    client
      .query({
        query: gql`
          {
            getUserById(id: "${val}") {
              name
              age
              location {
                long
                lat
              }
              books {
                title
              }
            }
          }
        `
      })
    .then(result => {
      this.setState({user: result.data.getUserById});
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { Content } = Layout;

    return (
      <ApolloProvider client={client}>
        <Layout> 
          <Slider {...this.state} />
          <Layout>
            <Header {...this.state} toggle={this.toggle}/>
              <div id="myAppContainer">
                <Content className="content-container">
                  <BreadCrumbs currentPosition={'Dashboard'} /> 
                  {this.props.children}
                </Content>
              </div>
              <Footer />
          </Layout>
        </Layout>
      </ApolloProvider>
    )
  }
}

export default withRouter(App);
