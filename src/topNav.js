import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Seasons from './components/seasons/seasons';

export function TopNav() {
    return (
    <Router>
        <nav className="topNav">
            <ul>
                <li><Link to="/seasons">Demo</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="seasons">Seasons</Link></li>
                <li><Link to="skintones">Select Skintones</Link></li>
                <li><Link to="wardrobe">Wardrobe</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
      </nav>
    </Router>
    );
}

export default connect()(TopNav);