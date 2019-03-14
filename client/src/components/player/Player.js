import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentShow } from "../../actions/radioActions";
import Playbutton from "../playbutton/Playbutton";
import "./Player.css";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    // this.returnShowData = this.returnShowData.bind(this);
    this.audioPlayer = React.createRef();
    this.handlePlayPauseClicked = this.handlePlayPauseClicked.bind(this);
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

  handlePlayPauseClicked() {
    if (this.state.playing === false) {
      this.setState({ playing: true }, function() {
        this.audioPlayer.current.play();
      });
    } else {
      this.setState({ playing: false }, function() {
        this.audioPlayer.current.pause();
      });
    }
  }

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
      <React.Fragment>
        <audio ref={this.audioPlayer} id="audioPlayer" name="media">
          <source
            src=" http://orphan.out.airtime.pro:8000/orphan_b"
            type="audio/mpeg"
          />
        </audio>
        <Playbutton
          className="play"
          playingTrueFalse={this.state.playing}
          playClicked={this.handlePlayPauseClicked}
        >
          Play
        </Playbutton>
        <div className="marquee-container">
          {/* <marquee className="current-show" behavior="scroll" direction="left"> */}{" "}
          {showContent}
          {/* </marquee> */}
        </div>
      </React.Fragment>
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
