import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ArchiveItem from "./ArchiveItem";
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
      archiveContent = archives.map(archive => (
        <ArchiveItem key={archive._id} archive={archive} />
      ));
    }

    return <div className="archive-page--archivess">{archiveContent}</div>;
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
