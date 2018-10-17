import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Artists from "../../components/artists/Artists";
import Releases from "../../components/releases/Releases";
import { NavLink, Route, Redirect } from "react-router-dom";
import "./RecordsPage.css";

export default class RecordsPage extends Component {
  render() {
    return (
      <div className="records-page">
        <NavBar />
        <div className="records-page--container">
          <div className="records-page--title">
            <div className="records-page--title__text">RECORDS.</div>
          </div>
          <div className="records-page--carousel">
            <Redirect to={`/records/artists`} component={Artists} />
            <Route path={`/records/artists`} component={Artists} />
            <Route path={`/records/releases`} component={Releases} />
          </div>

          <div className="records-page--sublinks">
            {" "}
            <NavLink
              className="records-page--sublinks__link sublink"
              activeClassName="active"
              to={`/records/artists`}
            >
              Artists
            </NavLink>
            <br />
            <NavLink
              className="records-page--sublinks__link sublink"
              activeClassName="active"
              to={`/records/releases`}
            >
              Releases
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
