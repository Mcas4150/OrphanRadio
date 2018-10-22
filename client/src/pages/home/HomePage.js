import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas/index";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./HomePage.css";

const styles = {
  fadeIn: {
    animation: "x .5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    display: "grid",
    gridTemplateRows: "1fr 16fr 1fr",
    padding: "15px",
    height: "calc(100vh - 30px)"
  }
};

export default class HomePage extends Component {
  render() {
    return (
      <StyleRoot>
        <ReactCursorPosition
          activationInteractionMouse={INTERACTIONS.HOVER} //default
          // hoverDelayInMs={250} //default: 0
          // hoverOffDelayInMs={150} //default: 0
        >
          <div className="homepage" style={styles.fadeIn}>
            <NavBar />
            <div className="homepage--container">
              <BackgroundCanvas />

              <div className="homepage--orphan">Orphan.</div>
            </div>
          </div>
        </ReactCursorPosition>
      </StyleRoot>
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
