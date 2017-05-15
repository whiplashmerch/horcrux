import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Home
} from '../routes';


export default class App extends Component {
  render() {
    return (
      <Router>


        <Route exact path="/" component={ Home } />
      </Router>
    );
  }
}
