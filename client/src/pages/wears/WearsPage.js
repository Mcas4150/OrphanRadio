import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";

import Schedule from "../../components/schedule/Schedule2";
import Archive from "../../components/archive/Archive";
import Residents from "../../components/residents/Residents";
import AloneIn from "../../components/aloneIn/AloneIn";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./WearsPage.css";

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

export default class WearsPage extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="wears-page">
          <NavBar />
          <div className="wears-page--mobile-sublinks">
            <NavLink
              className="wears-page--mobile-sublink"
              activeClassName="active"
              to={`/wears/schedule`}
            >
              Wares
            </NavLink>

            <NavLink
              className="wears-page--mobile-sublink"
              activeClassName="active"
              to={`/wears/archive`}
            >
              Media
            </NavLink>
          </div>
          <div className="wears-page--main">
            <div className="wears-page--title">
              <div className="wears-page--title__text">Wares.</div>
            </div>
            <div className="wears-page--carousel">
              <Redirect to={`/wears/schedule`} component={Schedule} />
              <Route path={`/wears/schedule`} component={Schedule} />
              <Route path={`/wears/archive`} component={Archive} />
              <Route path={`/wears/residents`} component={Residents} />
              <Route path={`/wears/aloneIn`} component={AloneIn} />
            </div>
            <div className="wears-page--sublinks">
              <NavLink
                className="wears-page--sublinks__link"
                activeClassName="active"
                to={`/wears/schedule`}
              >
                Wares
              </NavLink>
              <br />
              <NavLink
                className="wears-page--sublinks__link"
                activeClassName="active"
                to={`/wears/archive`}
              >
                Media
              </NavLink>
              <br />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </StyleRoot>
    );
  }
}
