import React, { Component } from "react";
// import { Transition } from "react-transition-group";
// import { Link, NavLink } from "react-router-dom";
import NavMenuMobile from "./NavMenuMobile";
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
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: true });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <div className="navbar">
        <div className="logo-left">
          <LeftCanvas color={this.props.color} />
        </div>
        {/* <Link className="navbar--brand" to="/home">
          </div>

        </Link> */}
        <div className="navbar--links" />

          <NavMenuMobile onClick={this.HandleMenuClick} open={menuOpen}/>

      </div>
    );
  }
}
