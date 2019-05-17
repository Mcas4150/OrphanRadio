import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import OrphanLogo from "../../img/orphanlogo.png";
import "./NavMenu.css";
import BackgroundCanvas from "../backgroundCanvas";

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    // this.handleUnClick = this.handleUnClick.bind(this);
  }

  handleUnClick() {
    if (this.state.open === true) this.setState({ open: false });
  }

  //   }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    if (this.props.open === false) {
      return <div className="nav-menu__hidden" />;
    } else {
      return (

        <div className="navMenu" onClick={this.handleUnClick()}>
          <div className="navMenu--list">
            <div className="navMenu--link__top">
              <Link className="navMenu--link" to="/home">
                Orphan.
              </Link>
            </div>
            <hr />
            <NavLink
             className="navMenu--link"
            exact
            activeClassName="active-records"
            to="/records/"
          >
              Records.
            </NavLink>
            <br />
            <NavLink
            className="navMenu--link"
            exact
            activeClassName="active-roster"
            to="/roster/"
          >
              Roster.
            </NavLink>
            <br />
            <NavLink className="navMenu--link"
            exact
            activeClassName="active-retail"
            to="/retail">
              Retail.
            </NavLink>
            <hr />
            <Link className="navMenu--link" to="#">
              Contact.
            </Link>

            <br />

            <a href="https://soundcloud.com/orphan_radio_records">
              <i class="fab fa-soundcloud" />
            </a>
            <a href="https://www.instagram.com/orphan.___/">
              <i class="fab fa-instagram" />
            </a>
          </div>
          <div className="navMenu--image-container">
            <BackgroundCanvas
              mouseX={this.props.point.x}
              mouseY={this.props.point.y}
            />
            {/* <img className="orphanLogo" src={OrphanLogo} alt="Orphan." /> */}
          </div>
        </div>
        // </ReactCursorPosition>
      );
    }
  }
}
