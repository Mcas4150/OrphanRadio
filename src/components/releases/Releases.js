import React, { Component } from "react";
import Yasha from "../../img/YashaLanding.jpg";
import "./Releases.css";

export default class Releases extends Component {
  render() {
    return (
      <div className="releases--container">
        <div className="releases--title">
          YASHA - Landing in SW9 / Landing in 206
        </div>
        <br />
        <img className="releases--image" src={Yasha} alt="Yasha" />
      </div>
    );
  }
}
