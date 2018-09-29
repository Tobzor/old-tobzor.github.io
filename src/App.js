import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./ClientApp/Layout";
import { CssBaseline } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Layout />
      </React.Fragment>
    );
  }
}

export default App;
