import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Artists from "../../components/artists/Artists";
import "./RosterPage.css";


export default class RosterPage extends Component {
  render() {
    return (

        <div className="roster-page">
          <NavBar />
          <div className="roster-page--container">
            <div className="roster-page--title">
              <div className="roster-page--title__text">ROSTER.</div>
            </div>
          <Artists/>
          </div>
        </div>
     
    );
  }
}
