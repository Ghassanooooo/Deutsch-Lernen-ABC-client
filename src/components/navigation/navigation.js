import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import LogoutButton from "../logoutButton/logoutButton";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary navbar-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse NavigationFlexFix"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
