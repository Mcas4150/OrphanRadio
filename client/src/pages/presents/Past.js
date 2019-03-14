import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Python from "../../img/DJPython.jpg";
import { getPasts } from "../../actions/pastActions";
import { Arrow } from "../../components/common/Arrow";
import "./Past.css";

class Past extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPastIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentWillMount() {
    this.props.getPasts();
  }

  previousSlide(props) {
    const lastIndex = this.props.past.pasts.length - 1;
    const { currentPastIndex } = this.state;
    const shouldResetIndex = currentPastIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentPastIndex - 1;

    this.setState({
      currentPastIndex: index
    });
  }

  nextSlide(props) {
    const lastIndex = this.props.past.pasts.length - 1;
    const { currentPastIndex } = this.state;
    const shouldResetIndex = currentPastIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentPastIndex + 1;

    this.setState({
      currentPastIndex: index
    });
  }

  render() {
    const { pasts } = this.props.past;
    let pastContent;
    if (pasts === null) {
      pastContent = "pasts";
    } else {
      const currentImage =
        pasts.length && pasts[this.state.currentPastIndex].image;
      const currentName =
        pasts.length && pasts[this.state.currentPastIndex].name;

      return (
        <div className="past--container">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
          <div className="past--card">
            <img className="past--image" src={currentImage} alt={currentName} />
            <div className="past--links" />
          </div>
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
      );
    }

    return { pastContent };
  }
}

Past.propTypes = {
  getPasts: PropTypes.func.isRequired,
  past: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  past: state.past
});

export default connect(
  mapStateToProps,
  { getPasts }
)(Past);
