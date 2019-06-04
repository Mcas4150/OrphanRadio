import React, { Component } from "react";
// import HomePage from "../../pages/home/HomePage";
import NavMenu from "../layout/NavMenu";
// import Footer from "../layout/Footer";

import "./BackgroundContainer.css";

import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";

export default class BackgroundContainer extends Component {
  render() {
    return (
      <ReactCursorPosition
        activationInteractionMouse={INTERACTIONS.HOVER}
        mapChildProps={({
          elementDimensions,
          isActive,
          isPositionOutside,
          position
        }) => {
          return {
            elementDimensions,
            isActive,
            isOutside: isPositionOutside,
            point: position
          };
        }} //default
        // hoverDelayInMs={250} //default: 0
        // hoverOffDelayInMs={150} //default: 0
      >
        <NavMenu />
        {/* <HomePage />
        <Footer /> */}
      </ReactCursorPosition>
    );
  }
}
