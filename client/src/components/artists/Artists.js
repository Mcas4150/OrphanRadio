import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FKL from "../../img/FKL.jpg";
import { getArtists } from "../../actions/artistActions";
import "./Artists.css";

class Artists extends Component {
  componentWillMount() {
    this.props.getArtists();
  }

  render() {
    const { artists } = this.props.artist;
    let artistContent;
    if (artists === null) {
      artistContent = "artists";
    } else {
      // artistContent = artists[0].name;
      artistContent = "oranges";
      // postContent = posts.slice(0, 2);
    }

    return (
      <div className="records-page--artists">
        {artistContent}

        {/* <div className="records-page--artist__title">FKL</div>
        <img className="records-page--artist__image" src={FKL} /> */}
      </div>
    );
  }
}

Artists.propTypes = {
  getArtists: PropTypes.func.isRequired,
  artist: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  artist: state.artist
});

export default connect(
  mapStateToProps,
  { getArtists }
)(Artists);
