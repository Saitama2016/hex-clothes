import React, { Component } from 'react';
import { TopNav } from './landingPage/topNav';
import { SideNav } from './landingPage/sideNav';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import { About } from './landingPage/about';
import Login from './session/loginForm';
import signUp from './session/registerForm';
import Avatar from './avatarLog/avatar';
import { Wardrobe } from './wardrobe/wardrobe';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <i onClick={() => document.getElementById("mySidenav").style.width = "500px"} className="fas fa-bars"></i>
          <h1 className="App-logo">HexClothes</h1>
          <h2 className="App-title">Make outfits that complement you!</h2>
          <SideNav />
          <TopNav />
        </header>
        <main>
          <Route exact path="/" component={About}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/avatar" component={Avatar}></Route>
          <Route path="/wardrobe" component={Wardrobe}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={signUp}></Route>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
