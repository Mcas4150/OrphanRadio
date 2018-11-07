import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import Yasha from "../../img/YashaLanding.jpg";
import Donnin from "../../img/max95.jpg";
import { getReleases } from "../../actions/releaseActions";
import { Arrow } from "../common/Arrow";
import "./Releases.css";

class Releases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentReleaseIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentWillMount() {
    this.props.getReleases();
  }

  previousSlide(props) {
    const lastIndex = this.props.release.releases.length - 1;
    const { currentReleaseIndex } = this.state;
    const shouldResetIndex = currentReleaseIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentReleaseIndex - 1;

    this.setState({
      currentReleaseIndex: index
    });
  }

  nextSlide(props) {
    const lastIndex = this.props.release.releases.length - 1;
    const { currentReleaseIndex } = this.state;
    const shouldResetIndex = currentReleaseIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentReleaseIndex + 1;

    this.setState({
      currentReleaseIndex: index
    });
  }

  render() {
    const { releases } = this.props.release;

    let releaseContent;
    if (releases === null) {
      releaseContent = "releases";
    } else {
      const currentArtist =
        releases.length && releases[this.state.currentReleaseIndex].artist;
      const currentTitle =
        releases.length && releases[this.state.currentReleaseIndex].title;
      const currentListenLink =
        releases.length && releases[this.state.currentReleaseIndex].listenLink;
      const currentBuyLink =
        releases.length && releases[this.state.currentReleaseIndex].buyLink;
      const currentImage =
        releases.length && releases[this.state.currentReleaseIndex].image;

      return (
        <div className="releases--container">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
          <div className="release--card">
            <div className="release--title">
              {currentArtist} - {currentTitle}{" "}
            </div>
            <img
              className="release--image"
              src={currentImage}
              alt="Max 95, Donnin"
            />
            <div className="release--links">
              <a
                className="release--listen-link"
                href={currentListenLink}
                target="_blank"
              >
                Listen
              </a>
              <a
                className="release--buy-link"
                href={currentBuyLink}
                target="_blank"
              >
                Buy
              </a>
            </div>
          </div>
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
      );
    }

    return { releaseContent };
  }
}

Releases.propTypes = {
  getReleases: PropTypes.func.isRequired,
  release: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  release: state.release
});

export default connect(
  mapStateToProps,
  { getReleases }
)(Releases);
