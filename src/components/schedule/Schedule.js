import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentWeek } from "../../actions/radioActions";
import "./Schedule.css";

class Schedule extends Component {
  componentDidMount() {
    this.props.getCurrentWeek();
  }

  render() {
    return <div>Schedule </div>;
  }
}

Schedule.propTypes = {
  getCurrentWeek: PropTypes.func.isRequired,
  currentWeekData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentWeekData: state.currentWeekStream
});

export default connect(
  mapStateToProps,
  { getCurrentWeek }
)(Schedule);
