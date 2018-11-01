import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Python from "../../img/DJPython.jpg";
import { getUpcomings } from "../../actions/upcomingActions";
import "./Upcoming.css";

class Upcoming extends Component {
  componentWillMount() {
    this.props.getUpcomings();
  }

  render() {
    const { upcomings } = this.props.upcoming;
    let upcomingContent;
    if (upcomings === null) {
      upcomingContent = "upcomings";
    } else {
      // upcomingContent = upcomings[0].name;
      upcomingContent = upcomings.map(upcoming => {
        const tickets = upcoming.tickets;
        const name = upcoming.name;

        return (
          <div className="upcoming--card">
            <img className="upcoming--image" src={Python} alt={name} />
            <div className="upcoming--links">
              <a
                className="upcoming--tickets-link"
                href={tickets}
                target="_blank"
              >
                Tickets
              </a>
            </div>
          </div>
        );
      });
    }

    return <div className="upcoming--container">{upcomingContent}</div>;
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

// export default class Upcoming extends Component {
//   render() {
//     return (
//       <div className="presents-page--upcoming">
//         {" "}
//         <img className="presents-page--event__image" alt="event" src={Python} />
//         <div className="presents-page--event__title">
//           <a href="https://www.residentadvisor.net/events/1080327">Tickets</a>
//         </div>
//       </div>
//     );
//   }
// }
