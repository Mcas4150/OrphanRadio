import React, { Component } from "react";
import Python from "../../img/DJPython.jpg";
import "./Upcoming.css";

export default class Upcoming extends Component {
  render() {
    return (
      <div className="presents-page--upcoming">
        {" "}
        <img className="presents-page--event__image" alt="event" src={Python} />
        <div className="presents-page--event__title">
          <a href="https://www.residentadvisor.net/events/1080327">Tickets</a>
        </div>
      </div>
    );
  }
}
