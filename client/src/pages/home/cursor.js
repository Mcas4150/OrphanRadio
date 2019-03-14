import React, { Component } from "react";
import ReactCursorPosition from "react-cursor-position";
import BackgroundCanvas from "../../components/backgroundCanvas/index";

export default class Example extends Component {
  render() {
    return (
      <ReactCursorPosition className="example">
        <PositionLabel />
        <BackgroundCanvas />
      </ReactCursorPosition>
    );
  }
}

const PositionLabel = props => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
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
