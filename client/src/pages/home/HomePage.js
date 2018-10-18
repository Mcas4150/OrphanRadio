import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas/index";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ReactCursorPosition from "react-cursor-position";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <ReactCursorPosition>
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
