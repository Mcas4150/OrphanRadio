import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import NavMenuItem from "./NavMenuItem";
import NavMenuButton from "./NavMenuButton";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Navbar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

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
        <div className="navbar--panel">
          <NavMenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="black"
          />

          <NavMenu open={this.state.menuOpen} />
        </div>
      </div>
    );
  }
}
