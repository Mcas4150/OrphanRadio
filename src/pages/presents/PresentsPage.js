import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./PresentsPage.css";

export default class PresentsPage extends Component {
  render() {
    return (
      <div className="presents-page">
        <NavBar />
        <div className="presents-page--main">
          <div className="presents-page--title">
            <div className="presents-page--title__text">PRESENTS.</div>
          </div>
          <div className="presents-page--carousel">Images</div>
          <div className="presents-page--sublinks">Upcoming</div>
        </div>
        <Footer />
      </div>
    );
  }
}
