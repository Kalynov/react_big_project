import React from 'react';
import classes from './navbar.module.css';


const Navbar = () => (
  <nav className = {classes.nav}>
    <div className = {`${classes.item} ${classes.active}`}><a>Profile</a></div>
    <div className = {classes.item}><a>Messages</a></div>
    <div className = {classes.item}><a>News</a></div>
    <div className = {classes.item}><a>Music</a></div>
    <div className = {classes.item}><a>setting</a></div>
  </nav>
);
export default Navbar;