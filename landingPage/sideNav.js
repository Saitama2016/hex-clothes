import React from 'react';
import {connect} from 'react-redux';
import './sideNav.css';

export function SideNav () {

    return (
    <nav id="mySidenav" className="sideNav"> 
        <a href="javascript:void(0)" className="closebtn" onClick={() => 
            document.getElementById("mySidenav").style.width = "0"}><i className="far fa-window-close fa-2x"></i></a>
        <a href="seasons">Demo</a>
        <a href="about">About</a>
        <a href="seasons">Seasons</a>
        <a href="skintones">Select Skintones</a>
        <a href="wardrobe">Wardrobe</a>
        <a href="login">Login</a>
        <a href="signup">Sign Up</a>
    </nav>
    );
}


export default connect()(SideNav);