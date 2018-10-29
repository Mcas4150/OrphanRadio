import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Yasha from "../../img/YashaLanding.jpg";
import Donnin from "../../img/max95.jpg";
import { getReleases } from "../../actions/releaseActions";
import "./Releases.css";

class Releases extends Component {
  componentWillMount() {
    this.props.getReleases();
  }

  render() {
    const { releases } = this.props.release;
    let releaseContent;
    if (releases === null) {
      releaseContent = "releases";
    } else {
      // releaseContent = releases[0].name;
      releaseContent = releases.map(release => {
        const artist = release.artist;
        const title = release.title;
        const listenLink = release.listenLink;
        const buyLink = release.buyLink;

        return (
          <div className="release--card">
            <div className="release--title">
              {artist} - {title}{" "}
            </div>
            <img className="release--image" src={Donnin} alt="Max 95, Donnin" />
            <div className="release--links">
              <a
                className="release--listen-link"
                href={listenLink}
                target="_blank"
              >
                Listen
              </a>
              <a className="release--buy-link" href={buyLink} target="_blank">
                Buy
              </a>
            </div>
          </div>
        );
      });
    }

    return <div className="releases--container">{releaseContent}</div>;
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
