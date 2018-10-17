import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentShow } from "../../actions/radioActions";
import "./Player.css";

class Player extends Component {
  // constructor(props) {
  //   super(props);
  //   this.returnShowData = this.returnShowData.bind(this);
  // }

  componentDidMount() {
    this.props.getCurrentShow();
  }

  // componentDidUpdate() {
  //   let currentTrack = null;
  //   if (this.props.currentShowData.currentShow !== null) {
  //     let showData = this.props.currentShowData.currentShow;
  //     // currentTrack = showData.current.name;
  //     // let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
  //     // let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
  //     // return parsedForAmpersands;
  //   }
  //   return currentTrack;
  // }

  // returnShowData() {
  //   let currentShowName = null;
  //   if (this.props.currentShowData.currentShow !== null) {
  //     let showData = this.props.currentShowData;
  //     currentShowName = showData.currentShow[0].name;
  //     let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
  //     let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
  //     return parsedForAmpersands;
  //   }
  //   return currentShowName;
  // }

  render() {
    const { currentShowStream } = this.props.radio;
    let showContent;
    if (currentShowStream === null) {
      showContent = "no show";
    } else {
      showContent = currentShowStream.currentShow[0].name;
    }

    // const showName = currentShowData.currentShowStream.currentShow[0].name;

    return (
      <div className="marquee-container">
        <marquee className="current-show" behavior="scroll" direction="left">
          {" "}
          {showContent}
        </marquee>
      </div>
    );
  }
}

Player.propTypes = {
  getCurrentShow: PropTypes.func.isRequired,
  radio: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  radio: state.radio
});

export default connect(
  mapStateToProps,
  { getCurrentShow }
)(Player);
