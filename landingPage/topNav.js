import React from 'react';
import {connect} from 'react-redux';

export function TopNav() {
    return (
        <nav className="topNav">
            <ul>
                <li><a href="seasons">Demo</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="seasons">Seasons</a></li>
                <li><a href="skintones">Select Skintones</a></li>
                <li><a href="wardrobe">Wardrobe</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
      </nav>
    );
}

export default connect()(TopNav);