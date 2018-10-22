import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { getCurrentWeek } from "../../actions/radioActions";
import "./Schedule.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: null,
      currentDate: null,
      showSchedule: {}
    };
    this.fetchDate = this.fetchDate.bind(this);
    this.fetchDay = this.fetchDay.bind(this);
    this.organizeWeek = this.organizeWeek.bind(this);
    this.showTimeParser = this.showTimeParser.bind(this);
  }

  componentWillMount() {
    this.fetchDate();
    this.fetchDay();
    this.props.getCurrentWeek();
  }

  componentDidMount() {}

  organizeWeek(stream, day) {
    for (let i = 0; i < stream.monday.length; i++) {
      return (
        <div>
          <div>{stream.monday[i].name}</div>
        </div>
      );
    }
  }

  fetchDate() {
    let todayDate = new Date();
    let dd = todayDate.getDate();
    let mm = todayDate.getMonth() + 1; //January is 0!
    let yy = todayDate.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let today = yy + "-" + mm + "-" + dd;
    this.setState(
      { currentDate: today },
      function() {
        this.fetchDay(todayDate.getDay());
      }.bind(this)
    );
  }

  fetchDay(dayNum) {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.setState({ currentDay: weekday[dayNum] });
  }

  // populateSchedule() {
  //   let showArray = this.convertShowScheduleToArray();
  //   let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
  //   const allShowDays = nextSevenDaysSchedule.map((day, index) => {
  //     return (
  //       <div
  //         className={this.parseDayClassName(day, index)}
  //         id={day[0]}
  //         onClick={day =>
  //           this.handleScheduleDayClick(day, nextSevenDaysSchedule)
  //         }
  //         key={index}
  //       >
  //         {this.parseDayData(day[0])}
  //       </div>
  //     );
  //   });
  //   this.setState(
  //     { displayedDays: allShowDays },
  //     this.handleSelectedDay(nextSevenDaysSchedule[0])
  //   );
  // }

  convertShowScheduleToArray(showSchedule) {
    // let showSchedule = this.state.showSchedule;
    // let showScheduleArray = [];
    // Object.keys(showSchedule).forEach(function(key) {
    //   showScheduleArray.push(key, showSchedule[key]);
    // });
    // let newArray = _.chunk(showScheduleArray, 2);
    // let arrayLength = newArray.length;
    // let positionToRemove = arrayLength - 1;
    // newArray.splice(positionToRemove, 1);
    // return newArray;
  }

  // deleteDaysInPast(scheduleData) {
  //   let currentDate = this.state.currentDate;
  //   for (let day of scheduleData) {
  //     if (day[1].length !== 0) {
  //       if (day[1][0].start_timestamp.includes(currentDate)) {
  //         let currentDayInScheduleIndex = scheduleData.indexOf(day);
  //         let finalDayInScheduleToDisplay = currentDayInScheduleIndex + 7;
  //         let nextSevenDaysSchedule = scheduleData.slice(
  //           currentDayInScheduleIndex,
  //           finalDayInScheduleToDisplay
  //         );
  //         return nextSevenDaysSchedule;
  //       }
  //     }
  //   }
  // }

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

    let showArray = this.convertShowScheduleToArray(currentWeekStream);
    // let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);

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
              <div className="schedule--day__name">{this.state.currentDay}</div>
              <div className="schedule--day__calendar">
                {this.state.currentDate}
              </div>
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
              <div className="schedule--day__name">
                {/* {nextSevenDaysSchedule[1]} */}
              </div>
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
          <div className="schedule--day">
            <div className="schedule--day__date">
              <div className="schedule--day__name">Friday</div>
              <div className="schedule--day__calendar">18/08/18</div>
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
              <div className="schedule--day__name">Saturday</div>
              <div className="schedule--day__calendar">18/09/18</div>
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
              <div className="schedule--day__name">Sunday</div>
              <div className="schedule--day__calendar">18/10/18</div>
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
