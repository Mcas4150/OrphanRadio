import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getArchives } from "../../actions/archiveActions";
import "./Archive.css";

class Archive extends Component {
  componentWillMount() {
    this.props.getArchives();
  }

  render() {
    const { archives } = this.props.archive;
    let archiveContent;
    if (archives === null) {
      archiveContent = "archives";
    } else {
      // archiveContent = archives[0].name;
      archiveContent = archives.map(archive => {
        const name = archive.name;
        const tracklist = archive.tracklist;
        const mix = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Forphan_radio%2F${
          archive.mix
        }%2F`;

        return (
          <div className="archive--card">
            <div className="archive--name">{name} </div>
            <iframe width="100%" height="120" src={mix} frameborder="0" />
            <div className="archive--tracklist">{tracklist}</div>
          </div>
        );
      });
    }

    return <div className="archive-page--artists">{archiveContent}</div>;
  }
}

Archive.propTypes = {
  getArchives: PropTypes.func.isRequired,
  archive: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  archive: state.archive
});

export default connect(
  mapStateToProps,
  { getArchives }
)(Archive);
