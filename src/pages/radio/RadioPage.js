import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Schedule from "../../components/schedule/Schedule";
import "./RadioPage.css";

export default class RadioPage extends Component {
  render() {
    return (
      <div className="radio-page">
        <NavBar />
        <div className="radio-page--main">
          <div className="radio-page--title">
            <div className="radio-page--title__text">RADIO.</div>
          </div>
          <div className="radio-page--carousel">
            <Schedule />
          </div>
          <div className="radio-page--sublinks">
            <div className="radio-page--sublinks__link bold">Schedule</div>
            <br />
            <div className="radio-page--sublinks__link">Archive</div>
            <br />
            <div className="radio-page--sublinks__link">Residents</div>
            <br />
            <div className="radio-page--sublinks__link">Alone In</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
