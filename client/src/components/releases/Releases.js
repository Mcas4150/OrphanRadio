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
    const sortedReleases = releases.sort(function(a, b){
      if(a.catalog < b.catalog) { return -1; }
      if(a.catalog > b.catalog) { return 1; }
      return 0;
  })
    const { appearCard } = this.state;


    return (

        <div className="releases--container">

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
            {sortedReleases &&
              sortedReleases.map((release, index) => {
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
