import React, { Component } from 'react';
import { TopNav } from './topNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">HexClothes</h1>
          <h2 className="App-title">Make an outfit that complements you!</h2>
          <TopNav />
        </header>
          <h3 className="App-intro">About</h3>

          <section className="row aboutGrid">
            <div className="col-4">
              <div className="step">
                <p>Step 1</p>
              </div>
            </div>
            <div className="col-4">
              <div className="step">
                <p>Step 2</p>
              </div>
            </div>
            <div className="col-4">
              <div className="step">
                <p>Step 3</p>
              </div>
            </div>
          </section>
      </div>
    );
  }
}

export default App;
