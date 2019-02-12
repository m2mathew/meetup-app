import React, { Component } from 'react';

import TopNav from './TopNav';

// Component Definition
class Root extends Component {
  render() {
    return (
        <div className="App">
          <TopNav />
          <header className="App-header">
            <a
              className="App-link"
              href="https://material-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Material-UI
            </a>
          </header>
        </div>
    );
  }
}

export default Root;
