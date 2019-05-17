import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas";
import Player from "../player/Player";
import "./Footer.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        {/* <BackgroundCanvas
          mouseX={this.props.point.x}
          mouseY={this.props.point.y}
        /> */}
        {/* <Player /> */}
      </div>
    );
  }
}
