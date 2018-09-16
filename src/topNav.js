import React from 'react';
import {connect} from 'react-redux';

export function TopNav() {
    return (
        <nav className="topNav">
            <ul>
                <li><a href="index.html">Demo</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="seasons.html">Seasons</a></li>
                <li><a href="skintones.html">Select Skintones</a></li>
                <li><a href="wardrobe.html">Wardrobe</a></li>
                <li><a href="newOutfit.html">Login</a></li>
                <li><a href="newOutfit.html">Sign Up</a></li>
            </ul>
      </nav>
    );
}

export default connect()(TopNav);