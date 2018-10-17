import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentWeek } from "../../actions/radioActions";
import "./Schedule.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.organizeWeek = this.organizeWeek.bind(this);
    this.showTimeParser = this.showTimeParser.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentWeek();
  }

  organizeWeek(stream, day) {
    for (let i = 0; i < stream.monday.length; i++) {
      return (
        <div>
          <div>{stream.monday[i].name}</div>

          <br />
        </div>
      );
    }
  }

  showTimeParser(show) {
    let startTime = show.monday[0].starts;
    let endTime = show.monday[0].ends;
    let parsedStart = startTime
      .split(" ")
      .splice(1)
      .join()
      .slice(0, -3);
    let parsedEnd = endTime
      .split(" ")
      .splice(1)
      .join()
      .slice(0, -3);
    return (
      <div>
        <td className="show-time">
          {parsedStart} - {parsedEnd}
        </td>
      </div>
    );
  }

  render() {
    const { currentWeekStream } = this.props.radio;
    let showContent;
    let monday;
    if (currentWeekStream === null) {
      showContent = "no shows";
    } else {
      showContent = (
        <div className="schedule-week">
          <div className="monday">
            monday
            <div>
              {this.organizeWeek(currentWeekStream)}
              {this.showTimeParser(currentWeekStream)}
            </div>
          </div>
        </div>
      );
    }

    return <div>{showContent}</div>;
  }
}

Schedule.propTypes = {
  getCurrentWeek: PropTypes.func.isRequired,
  radio: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  radio: state.radio
});

export default connect(
  mapStateToProps,
  { getCurrentWeek }
)(Schedule);
