import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import ReleaseCard from "../../components/releases/ReleaseCard";
import Releases from "../../components/releases/Releases";

import "./RecordsPage.css";

export default class RecordsPage extends Component {
  render() {
    return (
      <div className="records-page">
        <NavBar color={"#00559D"} />
        <div className="records-page--container">
          <div className="records-page--title">
            <div className="records-page--title__text">RECORDS.</div>
          </div>
          <div className="records-page--carousel">
            <Switch>
              <Route exact path="/records" component={Releases} />
              <Route path="/records/:id" component={ReleaseCard} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
