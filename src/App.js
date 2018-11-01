import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar'
import Footer from './components/Footer/Footer'
import {HashRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App" >
          <header className="App-header">
          <MenuBar/>
          </header>

          <main>
            {routes}
          </main>

        
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
