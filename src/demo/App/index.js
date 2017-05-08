import React, { Component } from 'react';
import Button from 'components/Button';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

        <Button />
      </div>
    );
  }
}
