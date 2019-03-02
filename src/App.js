import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TopNav } from './landingPage/topNav';
import { SideNav } from './landingPage/sideNav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { About } from './landingPage/about';
import Login from './session/loginForm';
import signUp from './session/registerForm';
import Wardrobe from './wardrobe/wardrobe';
import { refreshAuthToken } from './actions/auth';


class App extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillMount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }
    clearInterval(this.refreshInterval)
  }

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
          <Route path="/wardrobe" component={Wardrobe}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={signUp}></Route>
        </main>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
    hasAuthToken: state.authReducer.authToken !== null,
    loggedIn: state.authReducer.current !== null,
    openForm: state.openForm,
    skintone: state.skintone,
    clothes: state.clothes
})

export default connect(mapStateToProps)(App);
