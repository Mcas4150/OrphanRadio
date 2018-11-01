import React, { Component } from 'react'

export default class ArchiveItem extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


ArchiveItem.propTypes = {
  getArchive: PropTypes.func.isRequired,
  archive: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  archive: state.archive
});

export default connect(
  mapStateToProps,
  { getArchives }
)(Archive);
