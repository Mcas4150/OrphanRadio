import React from "react";
import "./Playbutton.css";

const Playbutton = props => {
  const playClickedWithinPlayButton = function() {
    props.playClicked();
  };

  const renderPlayPause = function() {
    if (props.playingTrueFalse === false) {
      return "play-button";
    } else {
      return "pause-button";
    }
  };

  return (
    <div className={renderPlayPause()} onClick={playClickedWithinPlayButton} />
  );
};

export default Playbutton;
