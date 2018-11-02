import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fadeIn } from "react-animations";
import _ from "lodash";
import { getCurrentWeek } from "../../actions/radioActions";
import Radium, { StyleRoot } from "radium";
import "./Schedule.css";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: null,
      currentDate: null,
      showSchedule: [],
      currentShow: null,
      selectedDay: null,
      displayedDays: []
    };
    this.fetchDate = this.fetchDate.bind(this);
    this.fetchDay = this.fetchDay.bind(this);
    // this.organizeWeek = this.organizeWeek.bind(this);
    this.showTimeParser = this.showTimeParser.bind(this);
    this.showNameParser = this.showNameParser.bind(this);
    this.populateSchedule = this.populateSchedule.bind(this);
    this.convertShowScheduleToArray = this.convertShowScheduleToArray.bind(
      this
    );
    this.deleteDaysInPast = this.deleteDaysInPast.bind(this);
    this.handleScheduleDayClick = this.handleScheduleDayClick.bind(this);
    this.parseDayClassName = this.parseDayClassName.bind(this);
    this.parseDayData = this.parseDayData.bind(this);
    this.removeNextFromDay = this.removeNextFromDay.bind(this);
  }

  componentWillMount() {
    this.fetchDate();
    this.fetchDay();

    this.props.getCurrentWeek();
    this.scheduleApiCall();
    // this.populateSchedule();
  }

  scheduleApiCall() {
    fetch("https://bentennas.airtime.pro/api/week-info")
      .then(response => response.json())
      .then(this.fetchDate())
      .then(data =>
        this.setState({ showSchedule: data }, function() {
          this.populateSchedule();
        })
      );
    // .then(this.populateSchedule())
    // .then(this.scheduleApiDataLoaded());
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

  populateSchedule() {
    let showArray = this.convertShowScheduleToArray();
    let nextSevenDaysSchedule = this.deleteDaysInPast(showArray);
    const allShowDays = nextSevenDaysSchedule.map((day, index) => {
      return (
        <div
          className={this.parseDayClassName(day, index)}
          id={day[0]}
          onClick={day =>
            this.handleScheduleDayClick(day, nextSevenDaysSchedule)
          }
          key={index}
        >
          {this.parseDayData(day[0])}
        </div>
      );
    });
    this.setState(
      { displayedDays: allShowDays },
      this.handleSelectedDay(nextSevenDaysSchedule[0])
    );
  }

  parseDayClassName(day, index) {
    // return `days-header-item`;
    return `days-header-item days-header-${index}`;
  }

  handleScheduleDayClick(clickedObj, schedule) {
    let dayClickedName = clickedObj.target.id;
    _.forEach(
      schedule,
      function(day) {
        if (day[0] === dayClickedName) this.handleSelectedDay(day, clickedObj);
      }.bind(this)
    );
  }

  handleSelectedDay(selectedDay, domObject) {
    if (domObject) {
      let oldSelectedObject = document.getElementsByClassName("days-header-0");
      oldSelectedObject[0].classList.remove("days-header-0");
      let classToRemove = domObject.target.classList[1];
      domObject.target.classList.remove(classToRemove);
      domObject.target.classList.add("days-header-0");
    }
    this.setState({ selectedDay: selectedDay }, function() {});
  }

  parseDayData(dayName) {
    let namesWithNextInChopped = this.removeNextFromDay(dayName);
    let splitName = namesWithNextInChopped.split("");
    let sliceToUpperCase = splitName.slice(0, 1);
    let upperCaseSlice = sliceToUpperCase[0].toUpperCase();
    let lowerCaseSlice = splitName.slice(1);
    lowerCaseSlice.unshift(upperCaseSlice);
    let finalDayName = lowerCaseSlice.join("");
    if (finalDayName === this.state.currentDay) {
      return "Today";
    } else {
      return finalDayName;
    }
  }

  removeNextFromDay(dayName) {
    if (dayName.includes("next")) {
      let splitName = dayName.split("");
      let cutName = splitName.splice(4);
      return cutName.join("");
    } else {
      return dayName;
    }
  }

  // convertShowScheduleToArray(show) {
  //   let showSchedule = this.show;
  //   let showScheduleArray = [];
  //   Object.keys(showSchedule).forEach(function(key) {
  //     showScheduleArray.push(key, showSchedule[key]);
  //   });
  //   let newArray = _.chunk(showScheduleArray, 2);
  //   let arrayLength = newArray.length;
  //   let positionToRemove = arrayLength - 1;
  //   newArray.splice(positionToRemove, 1);
  //   return newArray;
  // }

  convertShowScheduleToArray() {
    let showSchedule = this.state.showSchedule;
    let showScheduleArray = [];
    Object.keys(showSchedule).forEach(function(key) {
      showScheduleArray.push(key, showSchedule[key]);
    });
    let newArray = _.chunk(showScheduleArray, 2);
    let arrayLength = newArray.length;
    let positionToRemove = arrayLength - 1;
    newArray.splice(positionToRemove, 1);
    return newArray;
  }

  deleteDaysInPast(scheduleData) {
    // this.state.currentDate
    let currentDate = this.state.currentDate;
    for (let day of scheduleData) {
      if (day[1].length !== 0) {
        if (day[1][0].start_timestamp.includes(currentDate)) {
          let currentDayInScheduleIndex = scheduleData.indexOf(day);
          let finalDayInScheduleToDisplay = currentDayInScheduleIndex + 7;
          let nextSevenDaysSchedule = scheduleData.slice(
            currentDayInScheduleIndex,
            finalDayInScheduleToDisplay
          );
          return nextSevenDaysSchedule;
        }
      }
    }
  }

  renderSelectedDay() {
    // This.state.selectedDay
    if (this.state.selectedDay !== null) {
      let selectedDay = this.state.selectedDay[1];
      let showsForThatDay = selectedDay.map((show, index) => {
        return (
          <StyleRoot>
            <hr />
            <tr key={index} className="show-listing" style={styles.fadeIn}>
              {this.showTimeParser(show)}
              <td className="show-name" key={index}>
                {this.showNameParser(show)}
              </td>
            </tr>
          </StyleRoot>
        );
      });
      return showsForThatDay;
    }
  }

  showNameParser(show) {
    let currentShowName = show.name;
    let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
    let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
    return parsedForAmpersands;
  }

  // showTimeParser(show) {
  //   let startTime = show.monday[0].starts;
  //   let endTime = show.monday[0].ends;
  //   let parsedStart = startTime
  //     .split(" ")
  //     .splice(1)
  //     .join()
  //     .slice(0, -3);
  //   let parsedEnd = endTime
  //     .split(" ")
  //     .splice(1)
  //     .join()
  //     .slice(0, -3);
  //   return (
  //     <div>
  //       <td className="show-time">
  //         {parsedStart} - {parsedEnd}
  //       </td>
  //     </div>
  //   );
  // }

  showTimeParser(show) {
    let startTime = show.start_timestamp;
    let endTime = show.end_timestamp;
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

    return (
      <div className="schedule">
        <div className="schedule--timezone__container">
          <div className="schedule--timezone">
            <div className="schedule--timezone__title">TIMEZONE:</div>
            <div className="schedule--timezone__selector">GMT+0</div>
          </div>
          <hr />
        </div>
        <div className="schedule-header-body-container">
          <div className="schedule-container">
            <div className="schedule-subcontainer">
              {/* State.displayedDays */}
              <div className="days-header">{this.state.displayedDays}</div>
              <div className="schedule-divider" />
              <table className="show-schedule">
                <tbody>{this.renderSelectedDay()}</tbody>
              </table>
            </div>
          </div>
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
