import React, { Component } from "react";
import { NavLink, Route, Redirect } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Schedule from "../../components/schedule/Schedule";
import Archive from "../../components/archive/Archive";
import Residents from "../../components/residents/Residents";
import AloneIn from "../../components/aloneIn/AloneIn";

import "./RadioPage.css";

export default class RadioPage extends Component {
  render() {
    return (
      <div className="radio-page">
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
        <Footer />
      </div>
    );
  }
}
