import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Artists from "../../components/artists/Artists";
import Releases from "../../components/releases/Releases";
import { Link, Route, Switch } from "react-router-dom";
import "./RecordsPage.css";

export const RecordsPage = ({ match }) => {
  return (
    <div className="records-page">
      <NavBar />
      <div className="records-page--container">
        <div className="records-page--title">
          <div className="records-page--title__text">RECORDS.</div>
        </div>
        <div className="records-page--carousel">
          <Route exact path={match.url} render={() => <Artists />} />
          {/* <Route path={`${match.url}/:sectionName`} component={SubView} /> */}
          <Route exact path={`${match.url}/artists`} component={Artists} />
          <Route exact path={`${match.url}/releases`} component={Releases} />
          {/* <Switch>
              <Route exact path={`/records`} component={Artists} />
              <Route path={`/records/artists`} component={Artists} />
              <Route path={`/records/releases`} component={Releases} />
            </Switch> */}
        </div>

        <div className="records-page--sublinks">
          {" "}
          <Link
            className="records-page--sublinks__link bold"
            to={`${match.url}/artists`}
          >
            Artists
          </Link>
          <br />
          <Link
            className="records-page--sublinks__link"
            to={`${match.url}/releases`}
          >
            Releases
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const SubView = ({ match }) => <div>{match.params.sectionName}</div>;
