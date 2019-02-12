import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './utils/theme';

// Component Definition
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
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
      </MuiThemeProvider>
    );
  }
}

export default App;
