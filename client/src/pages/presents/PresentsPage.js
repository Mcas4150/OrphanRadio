import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Upcoming from "./Upcoming";
import Past from "./Past";
import { NavLink, Route, Redirect } from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./PresentsPage.css";

const styles = {
  fadeIn: {
    animation: "x .5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    background: "linear-gradient(to left, white 85%, red)",
    display: "grid",
    gridTemplateRows: "1fr 16fr 1fr",
    padding: "15px",
    height: "calc(100vh - 30px)"
  }
};

export default class PresentsPage extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="presents-page" style={styles.fadeIn}>
          <NavBar />
          <div className="presents-page--main">
            <div className="presents-page--title">
              <div className="presents-page--title__text">PRESENTS.</div>
            </div>
            <div className="presents-page--carousel">
              <Redirect to={`/presents/upcoming`} component={Upcoming} />
              <Route path={`/presents/upcoming`} component={Upcoming} />
              <Route path={`/presents/past`} component={Past} />
            </div>
            <div className="presents-page--sublinks">
              {" "}
              <NavLink
                className="presents-page--sublinks__link sublink"
                activeClassName="active"
                to={`/presents/upcoming`}
              >
                Upcoming
              </NavLink>
              <br />
              <NavLink
                className="presents-page--sublinks__link sublink"
                activeClassName="active"
                to={`/presents/past`}
              >
                Past
              </NavLink>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
