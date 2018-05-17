import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const AppHOC = (WrappedComponent) =>  {
  return class App extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} client={client}/>
        </ApolloProvider>
      )
    }
  }
}

export default AppHOC;
