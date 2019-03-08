import React from 'react';
import {connect} from 'react-redux';

function TopNavLogOut() {
    return (
        <nav className="topNavLogOut">
            <ul>
                <li><a href="about">About</a></li>
                <li><a href="/">LogOut</a></li>
            </ul>
      </nav>
    );
}

export default connect()(TopNavLogOut);