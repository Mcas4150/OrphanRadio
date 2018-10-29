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
      residentContent = residents.map(resident => {
        const name = resident.name;
        const bio = resident.bio;
        const mix = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
          resident.mix
        }&color=%230a0a0a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

        return (
          <React.Fragment>
            <div className="resident--card">
              <div className="resident--name">{name}</div>

              <div className="resident--grid">
                <div className="resident--card__left">
                  <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={mix}
                  />
                </div>
                <div className="resident--card__right">
                  <div className="resident--bio">{bio} </div>
                </div>
              </div>
            </div>
            <hr />
          </React.Fragment>
        );
      });
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
