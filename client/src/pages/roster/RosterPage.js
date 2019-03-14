import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";

import Artists from "../../components/artists/Artists";
import { NavLink, Route, Redirect } from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./RosterPage.css";

const styles = {
  fadeIn: {
    animation: "x .5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    background: "linear-gradient(to left, white 85%, yellow)",
    display: "grid",
    gridTemplateRows: "1fr 16fr 1fr",
    padding: "15px",
    height: "calc(100vh - 30px)"
  }
};

export default class RosterPage extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="roster-page">
          <NavBar />
          <div className="roster-page--container">
            <div className="roster-page--title">
              <div className="roster-page--title__text">ROSTER.</div>
            </div>
          <Artists/>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
