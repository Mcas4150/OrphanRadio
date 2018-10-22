import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getResidents } from "../../actions/residentActions";
import "./Residents.css";

class Residents extends Component {
  componentWillMount() {
    this.props.getResidents();
  }

  render() {
    const { residents } = this.props.resident;
    let residentContent;
    if (residents === null) {
      residentContent = "residents";
    } else {
      // residentContent = residents[0].name;
      residentContent = "oranges";
      // postContent = posts.slice(0, 2);
    }

    return (
      <div className="records-page--residents">
        {residentContent}

        {/* <div className="records-page--artist__title">FKL</div>
        <img className="records-page--artist__image" src={FKL} /> */}
      </div>
    );
  }
}

Residents.propTypes = {
  getResidents: PropTypes.func.isRequired,
  resident: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  resident: state.resident
});

export default connect(
  mapStateToProps,
  { getResidents }
)(Residents);
