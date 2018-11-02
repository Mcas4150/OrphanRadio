import React, { Component } from "react";

export default class ArchiveItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    if (this.state.expanded === false) {
      this.setState({ expanded: true });
    } else {
      this.setState({ expanded: false });
    }
  }

  timeParser(date) {
    let split = date.split("T", 1);
    return split;
  }

  render() {
    const { archive } = this.props;
    const date = this.timeParser(archive.date);
    const name = archive.name;
    let expandedContent;
    let icon;

    const mix = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
      archive.mix
    }&color=%230a0a0a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

    const expandedCard = () => {
      return (
        <React.Fragment>
          <div className="archive--mix">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={mix}
            />
          </div>
          <div className="archive--tracklist" />
        </React.Fragment>
      );
    };

    if (this.state.expanded === false) {
      icon = "+";
      expandedContent = null;
    } else {
      icon = "-";
      expandedContent = expandedCard();
    }

    return (
      <React.Fragment>
        <div className="archive--card">
          <div className="archive--date">{date}</div>
          <div className="archive--name">{name} </div>
          <div className="archive--expand" onClick={this.handleExpand}>
            {icon}
          </div>
          {/* <iframe width="100%" height="120" src={mix} frameborder="0" /> */}
          {/* <div className="archive--tracklist">{tracklist}</div> */}
        </div>
        <div className="archive--expanded">{expandedContent}</div>
        <hr />
      </React.Fragment>
    );
  }
}

// ArchiveItem.propTypes = {
//   getArchive: PropTypes.func.isRequired,
//   archive: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   archive: state.archive
// });

// export default connect(
//   mapStateToProps,
//   { getArchives }
// )(Archive);
