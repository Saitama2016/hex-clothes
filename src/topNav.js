import React from 'react';
import {connect} from 'react-redux';

export function TopNav() {
    return (
        <nav role="navigation">
            <i class="fas fa-bars"></i>
            <ul>
                <li><a href="index.html">Demo</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="newOutfit.html">Login</a></li>
                <li><a href="newOutfit.html">Sign Up</a></li>
            </ul>
      </nav>
    );
}

export default connect()(TopNav);