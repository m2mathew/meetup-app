import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';

import DrummerGrid from '../drummer-grid';
// import DrummerTable from '../drummer-table';
import TopNav from './TopNav';
import Footer from './Footer';

// Component Definition
class Root extends Component {
  render() {
    return (
      <Paper square>
        <div className="App">
          <TopNav hoverTitle="purple" />
          {/* <DrummerTable /> */}
          <DrummerGrid />
          <Footer />
        </div>
      </Paper>
    );
  }
}

export default Root;
