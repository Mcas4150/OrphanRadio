import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
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
            <Releases />
          </div>
        </div>
      </div>
    );
  }
}
