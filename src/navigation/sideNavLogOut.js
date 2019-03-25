import React from 'react';
import {connect} from 'react-redux';
import './sideNavLogOut.css';

export function SideNavLogOut () {

    return (
    <nav id="mySidenav" className="sideNavLogOut"> 
        <a href="javascript:void(0)" className="closebtn" onClick={() => 
            document.getElementById("mySidenav").style.width = "0"}><i className="far fa-window-close fa-2x"></i></a>
        <a href="/">LogOut</a>
    </nav>
    );
}


export default connect()(SideNavLogOut);