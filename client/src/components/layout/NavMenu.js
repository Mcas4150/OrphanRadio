import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import OrphanLogo from "../../img/orphanlogo.png";
import "./NavMenu.css";

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
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
            <Link className="navMenu--link" to="/records">
              Records.
            </Link>
            <br />
            <Link className="navMenu--link" to="/roster">
              Roster.
            </Link>
            <br />
            <Link className="navMenu--link" to="/retail">
              Retail.
            </Link>
            <hr />
            <Link className="navMenu--link" to="#">
              Contact.
            </Link>
   
            <br />
          </div>
          <div className="navMenu--image-container">
            <img className="orphanLogo" src={OrphanLogo} alt="Orphan." />
          </div>
        </div>
      );
    }
  }
}
