import React, { Component } from 'react';
import 'typeface-roboto';
import './style/styles.scss';

import { BrowserRouter } from 'react-router-dom';

// components
import Layout from './app/components/layout/layout';
import RouterComponent from './app/router';

class App extends Component {

  render() {
    return (
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
    );
  }
}

export default App;
