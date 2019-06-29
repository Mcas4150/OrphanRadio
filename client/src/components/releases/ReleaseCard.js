import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRelease } from "../../actions/releaseActions";
import "./ReleaseCard.css";

class ReleaseCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRelease: null
      // appearCard: false,
      // currentReleaseIndex: 0
    };
    // this.changeRelease = this.changeRelease.bind(this);
  }

  componentWillMount() {
    const {
      match: { params }
    } = this.props;

    this.props.getRelease(params.id);
    this.setState({
      currentRelease: this.props.release.releases.find( release =>  release._id === params.id)
    });
  }

  // shouldComponentUpdate(){
  //   this.setState({
  //     currentRelease: this.props.release.releases.find( release =>  release._id === this.props.match.params.id)
  //   });
  // }

  render() {
    const { release } = this.props.release;
    const { currentRelease } = this.state;

    return (
      <div className="release--card">
        {release && (
          <div>
            <div className="release--image-container">
              <img
                className="release--image"
                src={release.image}
                alt={release.title}
              />
              <div className="release--links">
                <div className="release--title">
                  {release.artist} - {release.title}{" "}
                </div>
                <a
                  className="release--listen-link"
                  href={release.listenLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen
                </a>
              </div>
            </div>
            <div className="release--text-container">{release.text }</div>
          </div>
        )}
      </div>
    );
  }
}

ReleaseCard.propTypes = {
  getRelease: PropTypes.func.isRequired,
  release: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  release: state.release
});

export default connect(
  mapStateToProps,
  { getRelease }
)(ReleaseCard);
