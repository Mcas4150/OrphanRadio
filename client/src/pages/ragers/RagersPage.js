import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import "./RagersPage.css";

export default class RagersPage extends Component {
  render() {
    return (
      <div className="ragers-page">
        {/* <NavBar color={"#43BCA9"} /> */}
        <NavBar color={"yellow"} />
        <div className="ragers-page--mobile-sublinks" />

        <div className="ragers-page--main">
          <div className="ragers-page--title">
            <div className="ragers-page--title__text">EVENTS.</div>
          </div>
          <div className="ragers-page--carousel">
            <div className="ragers--item">
              <a
                href="https://www.facebook.com/events/451348768745339/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  className="ragers--image"
                  src="https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/62307167_3001974406510948_1065992058025541632_o.jpg?_nc_cat=103&_nc_oc=AQnTZwkKsjcsJRbakRaO91aoC0VWERarGtkfknIP_ygTtcittgZYTI5U3vqtL_nfqVsdvz-zlFg88UE8N_9dtVqA&_nc_ht=scontent.fbed1-2.fna&oh=ba118abd0b10a2ab671dd87ff9eb8608&oe=5D51A58C"
                  alt="event"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
