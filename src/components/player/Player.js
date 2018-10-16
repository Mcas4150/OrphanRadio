import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentShow } from "../../actions/radioActions";

class Player extends Component {
  constructor(props) {
    super(props);
    this.returnShowData = this.returnShowData.bind(this);
  }

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

  returnShowData() {
    let currentShowName = null;
    if (this.props.currentShowData.currentShow !== null) {
      let showData = this.props.currentShowData;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
      return parsedForAmpersands;
    }
    return currentShowName;
  }

  render() {
    return (
      <div>
        <marquee className="current-show" behavior="scroll" direction="left">
          {" "}
          The Show
          {/* {this.returnShowData()} */}
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
  currentShowData: state.radio.currentShowStream
});

export default connect(
  mapStateToProps,
  { getCurrentShow }
)(Player);
