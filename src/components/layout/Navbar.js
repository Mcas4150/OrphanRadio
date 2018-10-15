import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar--brand" to="/home">
          Orphan.
        </Link>
        <div className="navbar--links">
          <NavLink
            className="nav-link"
            exact
            activeClassName="active"
            to="/radio"
          >
            Radio.
          </NavLink>
          <NavLink
            className="nav-link"
            exact
            activeClassName="active"
            to="/records"
          >
            Records.
          </NavLink>
          <NavLink
            className="nav-link"
            exact
            activeClassName="active"
            to="/presents"
          >
            Presents.
          </NavLink>
        </div>
        <div className="navbar--panel">Ham</div>
      </div>
    );
  }
}
