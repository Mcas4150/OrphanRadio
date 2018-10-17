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
    const { showData } = this.props.currentShowData;

    return (
      <div className="marquee-container">
        <marquee className="current-show" behavior="scroll" direction="left">
          {" "}
          The Show
          {/* {this.returnShowData()} */}
          {/* {showData.currentShow[0].name} */}
        </marquee>
      </div>
    );
  }
}

Player.propTypes = {
  getCurrentShow: PropTypes.func.isRequired,
  currentShowData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentShowData: state.radio
});

export default connect(
  mapStateToProps,
  { getCurrentShow }
)(Player);
