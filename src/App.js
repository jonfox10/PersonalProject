import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import MenuBar from './components/MenuBar/MenuBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hey Krystal, Hope you feel better and have a good day!
          </p>
          <Home />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
