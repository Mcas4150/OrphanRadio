import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Schedule from "../../components/schedule/Schedule";
import Archive from "../../components/archive/Archive";
import Residents from "../../components/residents/Residents";
import AloneIn from "../../components/aloneIn/AloneIn";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./RadioPage.css";

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

export default class RadioPage extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="radio-page" style={styles.fadeIn}>
          <NavBar />
          <div className="radio-page--main">
            <div className="radio-page--title">
              <div className="radio-page--title__text">RADIO.</div>
            </div>
            <div className="radio-page--carousel">
              <Redirect to={`/radio/schedule`} component={Schedule} />
              <Route path={`/radio/schedule`} component={Schedule} />
              <Route path={`/radio/archive`} component={Archive} />
              <Route path={`/radio/residents`} component={Residents} />
              <Route path={`/radio/aloneIn`} component={AloneIn} />
            </div>
            <div className="radio-page--sublinks">
              <NavLink
                className="radio-page--sublinks__link"
                activeClassName="active"
                to={`/radio/schedule`}
              >
                Schedule
              </NavLink>
              <br />
              <NavLink
                className="radio-page--sublinks__link"
                activeClassName="active"
                to={`/radio/archive`}
              >
                Archive
              </NavLink>
              <br />
              <NavLink
                className="radio-page--sublinks__link"
                activeClassName="active"
                to={`/radio/residents`}
              >
                Residents
              </NavLink>
              <br />
              <NavLink
                className="radio-page--sublinks__link"
                activeClassName="active"
                to={`/radio/aloneIn`}
              >
                Alone In
              </NavLink>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </StyleRoot>
    );
  }
}