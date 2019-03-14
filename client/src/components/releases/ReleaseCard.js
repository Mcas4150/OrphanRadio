import React, { Component } from "react";
import "./ReleaseCard.css";

export default class ReleaseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="release--card">
        <div className="release--title">
          {this.props.currentArtist} - {this.props.currentTitle}{" "}
        </div>
        <img
          className="release--image"
          src={this.props.currentImage}
          alt="Max 95, Donnin"
        />
        <div className="release--links">
          <a
            className="release--listen-link"
            href={this.props.currentListenLink}
            target="_blank"
          >
            Listen
          </a>
          <a
            className="release--buy-link"
            href={this.props.currentBuyLink}
            target="_blank"
          >
            Buy
          </a>
        </div>
      </div>
    );
  }
}
