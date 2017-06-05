import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Home,
  Install
} from '../routes';

import { NavMenu } from '../features';

import './App.css';


export default class App extends Component {
  state = {
    mobileNavActive: false
  }

  componentDidMount() {
    const { mobileNavActive } = this.state;
    const desktop = window.innerWidth >= 768;

    if (desktop && !mobileNavActive) {
      this.setState({ mobileNavActive: true });
    }
  }

  // PRIVATE

  _hideNav = () => {
    this.setState(({ mobileNavActive: false }));
  }

  _showNav = () => {
    this.setState(({ mobileNavActive: true }));
  }


  render() {
    const { mobileNavActive } = this.state;
    const baseStyles = {
      height: '100%',
      position: 'relative',
      width: '100%'
    };

    return (
      <Router>
        <div style={ baseStyles }>
          <div className="App-Navicon" onClick={ this._showNav }>
            <span className="App-Navicon-bar" />
            <span className="App-Navicon-bar" />
            <span className="App-Navicon-bar" />
          </div>

          <NavMenu
            active={ mobileNavActive }
            closeNav={ this._hideNav }
          />

          <Route exact path="/" component={ Home } />
          <Route path="/install" component={ Install } />
        </div>
      </Router>
    );
  }
}
