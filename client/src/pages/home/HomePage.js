import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas/index";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <ReactCursorPosition
        activationInteractionMouse={INTERACTIONS.HOVER} //default
        // hoverDelayInMs={250} //default: 0
        // hoverOffDelayInMs={150} //default: 0
      >
        <div className="homepage">
          <NavBar />
          <div className="homepage--container">
            <BackgroundCanvas />

            <div className="homepage--orphan">Orphan.</div>
          </div>
        </div>
      </ReactCursorPosition>
    );
  }
}

const PositionLabel = props => {
  const {
    detectedEnvironment: {
      isMouseDetected = true,
      isTouchDetected = false
    } = {},
    elementDimensions: { width = 1200, height = 1000 } = {},
    isActive = true,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {}
  } = props;

  return (
    <div className="example__label">
      {`x: ${x}`}
      <br />
      {`y: ${y}`}
      <br />
      {`width:: ${width}`}
      <br />
      {`height: ${height}`}
      <br />
      {`isActive: ${isActive}`}
      <br />
      {`isPositionOutside: ${isPositionOutside ? "true" : "false"}`}
      <br />
      {`isMouseDetected: ${isMouseDetected ? "true" : "false"}`}
      <br />
      {`isTouchDetected: ${isTouchDetected ? "true" : "false"}`}
    </div>
  );
};
