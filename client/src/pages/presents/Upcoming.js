import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Python from "../../img/DJPython.jpg";
import { Arrow } from "../../components/common/Arrow";
import { getUpcomings } from "../../actions/upcomingActions";
import "./Upcoming.css";

class Upcoming extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUpcomingIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentWillMount() {
    this.props.getUpcomings();
  }

  previousSlide() {
    const lastIndex = this.props.upcoming.upcomings.length - 1;
    const { currentUpcomingIndex } = this.state;
    const shouldResetIndex = currentUpcomingIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentUpcomingIndex - 1;

    this.setState({
      currentUpcomingIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.props.upcoming.upcomings.length - 1;
    const { currentUpcomingIndex } = this.state;
    const shouldResetIndex = currentUpcomingIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentUpcomingIndex + 1;

    this.setState({
      currentUpcomingIndex: index
    });
  }

  render() {
    const { upcomings } = this.props.upcoming;
    let upcomingContent;
    if (upcomings === null || upcomings.length === 0) {
      return <div className="stay-tuned">Stay Tuned.</div>;
    } else {
      const currentTicketLink =
        upcomings.length && upcomings[this.state.currentUpcomingIndex].tickets;
      const currentImage =
        upcomings.length && upcomings[this.state.currentUpcomingIndex].image;
      const currentName =
        upcomings.length && upcomings[this.state.currentUpcomingIndex].name;

      return (
        <div className="upcoming--container">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
          <div className="upcoming--card">
            <img
              className="upcoming--image"
              src={currentImage}
              alt={currentName}
            />
            <div className="upcoming--links">
              <a
                className="upcoming--tickets-link"
                href={currentTicketLink}
                target="_blank"
              >
                Tickets
              </a>
            </div>
          </div>
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
      );
    }

    return { upcomingContent };
  }
}

Upcoming.propTypes = {
  getUpcomings: PropTypes.func.isRequired,
  upcoming: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  upcoming: state.upcoming
});

export default connect(
  mapStateToProps,
  { getUpcomings }
)(Upcoming);
