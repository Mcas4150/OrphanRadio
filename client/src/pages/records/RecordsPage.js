import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import Releases from "../../components/releases/Releases";
import { NavLink, Route, Redirect } from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./RecordsPage.css";

// const styles = {
//   fadeIn: {
//     animation: "x .5s",
//     animationName: Radium.keyframes(fadeIn, "fadeIn"),
//     background: "linear-gradient(to left, white 85%, yellow)",
//     display: "grid",
//     gridTemplateRows: "1fr 16fr 1fr",
//     padding: "15px",
//     height: "calc(100vh - 30px)"
//   }
// };

export default class RecordsPage extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="records-page">
          <NavBar />
          <div className="records-page--container">

            <div className="records-page--title">
              <div className="records-page--title__text">RECORDS.</div>
            </div>
            <div className="records-page--carousel">
             
              <Releases/>
            </div>

            {/* <div className="records-page--sublinks">
              {" "}
              <NavLink
                className="records-page--sublinks__link sublink"
                activeClassName="active"
                to={`/records/artists`}
              >
                Artists
              </NavLink>
              <br />
              <NavLink
                className="records-page--sublinks__link sublink"
                activeClassName="active"
                to={`/records/releases`}
              >
                Releases
              </NavLink>
            </div> */}
          </div>
        </div>
      </StyleRoot>
    );
  }
}
