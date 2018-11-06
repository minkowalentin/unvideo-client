import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import client from './app/graphql/apollo.config'
import { BrowserRouter } from 'react-router-dom';

import 'typeface-roboto';
import './style/styles.scss';

// components
import Layout from './app/components/layout/layout';
import RouterComponent from './app/router';

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <div>
            <Layout />
              <div className="content">
                <RouterComponent />
              </div>
          </div>
        </BrowserRouter>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
