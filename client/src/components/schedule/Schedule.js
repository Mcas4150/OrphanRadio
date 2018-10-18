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
        </div>
      );
    }
  }

  // const scheduleDay = () => (
  //   <div>

  //         </div>

  // )

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
            <div>
              {this.organizeWeek(currentWeekStream)}
              {this.showTimeParser(currentWeekStream)}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="schedule">
        <div className="schedule--timezone">
          <div className="schedule--timezone__title">TIMEZONE:</div>
          <div className="schedule--timezone__selector">GMT+0</div>
        </div>
        <hr />
        <div className="schedule--daily__grid">
          <div className="schedule--day">
            <div className="schedule--day__date">
              <div className="schedule--day__name">Monday</div>
              <div className="schedule--day__calendar">18/04/18</div>
            </div>
            <div className="schedule--day__shows">
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
            </div>
          </div>
          <hr />
          <div className="schedule--day">
            <div className="schedule--day__date">
              <div className="schedule--day__name">Tuesday</div>
              <div className="schedule--day__calendar">18/05/18</div>
            </div>
            <div className="schedule--day__shows">
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
            </div>
          </div>
          <hr />
          <div className="schedule--day">
            <div className="schedule--day__date">
              <div className="schedule--day__name">Wednesday</div>
              <div className="schedule--day__calendar">18/06/18</div>
            </div>
            <div className="schedule--day__shows">
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
            </div>
          </div>
          <hr />
          <div className="schedule--day">
            <div className="schedule--day__date">
              <div className="schedule--day__name">Thursday</div>
              <div className="schedule--day__calendar">18/07/18</div>
            </div>
            <div className="schedule--day__shows">
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
              <hr />
              <div className="schedule--day__show">{showContent}</div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
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
