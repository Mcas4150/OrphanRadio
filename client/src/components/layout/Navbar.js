import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import NavMenuButton from "./NavMenuButton";
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";
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
        <div className="navbar--links" />
        <div className="navbar--panel" />
      </div>
    );
  }
}
