import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

// In this method we use a function rather than a class to define the navbar since it does not have a state. When a function does not have a state it is refferred to as a -
// - stateless functional component (shortcut: sfc. Example below). This is is purely up to your preference, however, it is typical practice to use an sfc over a class when -
// - there is not state

// NOTE: When using a sfc over a class, you will need to pass in props as a parameter

const Navbar = props =>{
    return (
        <nav className="navbar">
            <a href="" className="navbar-brand">Navbar</a>
            <a href="" className="navbar-brand">Number of Counters: {props.totalCounters} </a>
        </nav>
    );
}
 
export default Navbar;