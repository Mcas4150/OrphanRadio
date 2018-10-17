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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        right: 0,
        height: this.state.open ? "100%" : 0,
        width: "20vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 1,
        // color: "#fafafa",
        color: "white",
        transition: "height 0.3s ease",
        zIndex: 2
      }
    };
    return (
      <div className="navMenu" style={styles.container}>
        {this.state.open ? (
          <div className="navMenu--list">
            <Link className="navMenu--link" to="/home">
              Orphan.
            </Link>
            <hr />
            <Link className="navMenu--link" to="/radio">
              Radio.
            </Link>
            <br />
            <Link className="navMenu--link" to="/records">
              Records.
            </Link>
            <br />
            <Link className="navMenu--link" to="/presents">
              Presents.
            </Link>
            <hr />
            <div className="navMenu--link">Listen Live.</div>
            <hr />
            <Link className="navMenu--link" to="#">
              Shop.
            </Link>
            <br />
            <Link className="navMenu--link" to="#">
              Donate.
            </Link>
            <hr />
            <Link className="navMenu--link" to="#">
              Contact.
            </Link>
            <br />
            <Link className="navMenu--link" to="#">
              Info.
            </Link>
            <br />
            <div className="navMenu--image-container">
              <img className="orphanLogo" src={OrphanLogo} alt="Orphan." />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
