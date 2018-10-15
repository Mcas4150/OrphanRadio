import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas/index";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <BackgroundCanvas />
        <div className="homepage--orphan">Orphan.</div>
      </div>
    );
  }
}
