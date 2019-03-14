import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import Schedule from "../../components/schedule/Schedule2";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./RetailPage.css";

const styles = {
  fadeIn: {
    animation: "x .5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    background: "linear-gradient(to left, white 85%, blue)",
    display: "grid",
    gridTemplateRows: "1fr 16fr 1fr",
    padding: "15px",
    height: "calc(100vh - 30px)"
  }
};

export default class RetailPage extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="retail-page">
          <NavBar />
          <div className="retail-page--mobile-sublinks">
            <NavLink
              className="retail-page--mobile-sublink"
              activeClassName="active"
              to={`/records/`}
            >
              Records
            </NavLink>

            <NavLink
              className="retail-page--mobile-sublink"
              activeClassName="active"
              to={`/roster/`}
            >
              Roster
            </NavLink>
          </div>
          <div className="retail-page--main">
            <div className="retail-page--title">
              <div className="retail-page--title__text">RETAIL.</div>
            </div>
            <div className="retail-page--carousel">
              <Redirect to={`/retail/schedule`} component={Schedule} />
              <Route path={`/retail/schedule`} component={Schedule} />

            </div>
           
          </div>
          {/* <Footer /> */}
        </div>
      </StyleRoot>
    );
  }
}
