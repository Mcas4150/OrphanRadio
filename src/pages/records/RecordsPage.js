import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FKL from "../../img/FKL.jpg";
import "./RecordsPage.css";

export default class RecordsPage extends Component {
  render() {
    return (
      <div className="records-page">
        <NavBar />
        <div className="records-page--container">
          <div className="records-page--title">
            <div className="records-page--title__text">RECORDS.</div>
          </div>
          <div className="records-page--carousel">
            <div className="records-page--artist__title">FKL</div>
            <img className="records-page--artist__image" src={FKL} />
          </div>

          <div className="records-page--sublinks">
            {" "}
            <div className="records-page--sublinks__link bold">Artists</div>
            <br />
            <div className="records-page--sublinks__link">Releases</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
