import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getReleases } from "../../actions/releaseActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Releases.css";

class Releases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appearCard: false,
      currentReleaseIndex: 0
    };
    this.changeRelease = this.changeRelease.bind(this);
  }

  componentWillMount() {
    this.props.getReleases();
  }

  componentDidMount() {
    this.toggleAppear();
  }

  toggleAppear = () => {
    this.setState({
      appearCard: !this.state.appearCard
    });
  };

  changeRelease(index) {
    this.setState({
      currentReleaseIndex: index
    });
  }

  render() {
    const { releases } = this.props.release;
    const { appearCard } = this.state;

    // let releaseContent;
    // if (releases === null) {
    //   releaseContent = "releases";
    // } else {
    //   const currentArtist =
    //     releases.length && releases[this.state.currentReleaseIndex].artist;
    //   const currentTitle =
    //     releases.length && releases[this.state.currentReleaseIndex].title;
    //   const currentCatalog =
    //     releases.length && releases[this.state.currentReleaseIndex].catalog;
    //   const currentListenLink =
    //     releases.length && releases[this.state.currentReleaseIndex].listenLink;
    //   const currentBuyLink =
    //     releases.length && releases[this.state.currentReleaseIndex].buyLink;
    //   const currentImage =
    //     releases.length && releases[this.state.currentReleaseIndex].image;
    //   const currentText =
    //     releases.length && releases[this.state.currentReleaseIndex].text;
    //   const currentID =
    //     releases.length && releases[this.state.currentReleaseIndex]._id;

    return (
   
        <div className="releases--container">
          {/* <div className="releases--sublinks">
              {releases.map((release, index) => {
                return (
                  <React.Fragment>
                    <div
                      key={index}
                      className={
                        this.state.currentReleaseIndex === index
                          ? "releases--sublinks__link sublink active-link"
                          : "releases--sublinks__link sublink"
                      }
                      style={{
                        color:
                          this.state.currentReleaseIndex === index
                            ? release.color
                            : "white"
                      }}
                      onClick={() => this.changeRelease(index)}
                    >
                      {release.catalog}
                    </div>
                  </React.Fragment>
                );
              })}
            </div> */}
          {/* <TransitionGroup>
              <CSSTransition key={currentID} timeout={200} classNames="fade">
                <ReleaseCard
                  key={this.state.currentReleaseIndex}
                  currentArtist={currentArtist}
                  currentTitle={currentTitle}
                  currentListenLink={currentListenLink}
                  currentCatalog={currentCatalog}
                  currentBuyLink={currentBuyLink}
                  currentImage={currentImage}
                  currentText={currentText}
                />
              </CSSTransition>
            </TransitionGroup> */}
          <div className="releases--grid">
            {releases &&
              releases.map((release, index) => {
                return (
                  <Link
                    className="navbar--brand"
                    to={`/records/${release._id}`}
                  >
                    <img
                      className="release--image"
                      src={release.image}
                      alt={release.title}
                    />
                  </Link>
                );
              })}
          </div>
        </div>

    );
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
