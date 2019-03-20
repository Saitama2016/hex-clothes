import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { About } from './landingPage/about';
import Login from './session/loginForm';
import SignUp from './session/registerForm';
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
        <main>
          <Route exact path="/" component={About}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/wardrobe" component={Wardrobe}></Route>
          <Route path="/login" render={() => <Login />}></Route>
          <Route path="/signup" render={() => <SignUp />}></Route>
        </main>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // hasAuthToken: state.authReducer.authToken !== null,
    // loggedIn: state.authReducer.current !== null,
    skintone: state.outfitReducer.skintone,
    shirtColor: state.outfitReducer.shirtColor,
    shirtType: state.outfitReducer.shirtType,
    shortSleeveVisibility: state.outfitReducer.shortSleeveVisibility,
    longSleeveVisibility: state.outfitReducer.longSleeveVisibility,
    pantsColor: state.outfitReducer.pantsColor,
    pantsType: state.outfitReducer.pantsType,
    shoesColor: state.outfitReducer.shoesColor
  }
}

export default connect(mapStateToProps)(App);
