import React from 'react';
import {connect} from 'react-redux';
import './sideNav.css';

export function SideNav () {

    return (
    <nav role="navigation" id="mySidenav" className="sideNav"> 
        <a href="javascript:void(0)" className="closebtn" onClick={() => 
            document.getElementById("mySidenav").style.width = "0"}><i className="far fa-window-close fa-2x"></i></a>
        <a href="index.html">Demo</a>
        <a href="about.html">About</a>
        <a href="seasons.html">Seasons</a>
        <a href="skintones.html">Select Skintones</a>
        <a href="wardrobe.html">Wardrobe</a>
        <a href="newOutfit.html">Login</a>
        <a href="newOutfit.html">Sign Up</a>
    </nav>
    );
}


export default connect()(SideNav);