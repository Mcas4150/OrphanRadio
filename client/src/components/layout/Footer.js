import React, { Component } from "react";
import Player from "../player/Player";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--stream">
          <div className="footer--stream__container">
            <div className="footer-circle-container">
              {/* <div className="footer--stream__circle" /> */}
            </div>
            <div className="footer--stream__marquee">
              <Player />
            </div>
          </div>
        </div>
        <div className="footer--donate">Donate.</div>
      </div>
    );
  }
}
