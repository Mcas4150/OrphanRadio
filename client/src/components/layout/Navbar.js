import React, { Component } from "react";
import { Transition } from "react-transition-group";
// import { Link, NavLink } from "react-router-dom";
// import NavMenu from "./NavMenu";
import LeftCanvas from "./LeftCanvas";
// import NavMenuButton from "./NavMenuButton";
// import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";
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
        <div className="logo-left">
          <LeftCanvas color={this.props.color} />
        </div>
        {/* <Link className="navbar--brand" to="/home">
          </div>

        </Link> */}
        <div className="navbar--links" />
        <div className="navbar--panel">
          Link
          </div>
      </div>
    );
  }
}
