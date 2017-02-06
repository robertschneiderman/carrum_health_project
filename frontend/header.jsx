import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
    } else {
      return [
        <li className="navbar-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="navbar-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar">
        <img className="navbar--logo" src="./static/images/logo_large.svg" alt="Carrum Health Logo"/>
        <p className="navbar--text">Welcome Wayne Enterprises Members</p>
        <img className="navbar--img" src="./static/images/wane_logo.jpg" alt="Wane Logo"/>
        <img className="navbar--btn" src="./static/images/hamburger_icon.svg" alt="Hamberger Icon"/>
      </nav>
    );
        // <ul className="navbar-nav">
        //   {this.renderLinks()}
        // </ul>
  }
}

export default Header;