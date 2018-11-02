import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Python from "../../img/DJPython.jpg";
import { getPasts } from "../../actions/pastActions";
import "./Past.css";

class Past extends Component {
  componentWillMount() {
    this.props.getPasts();
  }

  render() {
    const { pasts } = this.props.past;
    let pastContent;
    if (pasts === null) {
      pastContent = "pasts";
    } else {
      // upcomingContent = upcomings[0].name;
      pastContent = pasts.map(past => {
        const tickets = past.tickets;
        const name = past.name;

        return (
          <div className="past--card">
            <img className="past--image" src={Python} alt={name} />
            <div className="past--links" />
          </div>
        );
      });
    }

    return <div className="past--container">{pastContent}</div>;
  }
}

Past.propTypes = {
  getPasts: PropTypes.func.isRequired,
  past: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  past: state.past
});

export default connect(
  mapStateToProps,
  { getPasts }
)(Past);
