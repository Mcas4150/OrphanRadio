import React, { Component } from "react";
import FKL from "../../img/FKL.jpg";
import "./Artists.css";

export default class Artists extends Component {
  render() {
    return (
      <div className="records-page--artists">
        <div className="records-page--artist__title">FKL</div>
        <img className="records-page--artist__image" src={FKL} />
      </div>
    );
  }
}
