import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./NavMenu.css";
import BackgroundCanvas from "../backgroundCanvas";
import { getReleases } from "../../actions/releaseActions";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentReleaseIndex: 0
    };
    // this.handleUnClick = this.handleUnClick.bind(this);
    this.changeRelease = this.changeRelease.bind(this);
  }

  componentWillMount() {
    this.props.getReleases();
  }

  handleUnClick() {
    if (this.state.open === true) this.setState({ open: false });
  }

  //   }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  changeRelease(index) {
    this.setState({
      currentReleaseIndex: index
    });
  }

  render() {
    const { releases } = this.props.release;

    if (this.props.open === false) {
      return <div className="nav-menu__hidden" />;
    } else {
      return (
        <div className="navMenu" onClick={this.handleUnClick()}>
          <div className="navMenu--list">
            <Link className="navMenu--link navMenu--link__top" to="/home">
              Orphan.
            </Link>
            <hr />
            <NavLink
              className="navMenu--link link-records"
              exact
              activeClassName="active-records"
              to="/records/"
            >
              Records.
            </NavLink>
            {/* <NavLink
              className="navMenu--link link-roster"
              exact
              activeClassName="active-roster"
              to="/roster/"
            >
              Roster.
            </NavLink> */}
            <br />
            <NavLink
              className="navMenu--link link-ragers"
              exact
              activeClassName="active-ragers"
              to="/ragers"
            >
              Events.
            </NavLink>{" "}
            <br />
            <NavLink
              className="navMenu--link link-retail"
              exact
              activeClassName="active-retail"
              to="/retail"
            >
              Retail.
            </NavLink>
          </div>

          <div className="navMenu--releaseLinks-container">
            {releases &&
              releases.map((release, index) => {
                return (
                  <React.Fragment>
                    <div
                      key={index}
                      className={
                        this.state.currentReleaseIndex === index
                          ? "releases--sublinks__link sublink active-link"
                          : "releases--sublinks__link sublink"
                      }
                      // style={{ color: release.color }}
                      style={{ color: "black" }}
                      onClick={() => this.changeRelease(index)}
                    >
                      {release.catalog}.
                    </div>
                  </React.Fragment>
                );
              })}
          </div>

          <div className="navMenu--footer-container">
            <div className="navMenu--image-container">
              <BackgroundCanvas
                mouseX={this.props.point.x}
                mouseY={this.props.point.y}
              />
              {/* <img className="orphanLogo" src={OrphanLogo} alt="Orphan." /> */}
            </div>

            <div className="social-row">
              <a
                className="social"
                href="https://soundcloud.com/orphan_radio_records"
              >
                <i className="fab fa-soundcloud" />
              </a>
              <a
                className="social"
                href="https://orphanrecordsradio.bandcamp.com/"
              >
                <i className="fab fa-bandcamp" />
              </a>
              <a
                className="social"
                href="https://www.instagram.com/orphan.___/"
              >
                <i className="fab fa-instagram" />
              </a>

              <a
                className="social"
                href="https://www.facebook.com/orphanradiorecords/"
              >
                <i className="fab fa-facebook" />
              </a>
            </div>
          </div>
        </div>
        // </ReactCursorPosition>
      );
    }
  }
}

NavMenu.propTypes = {
  getReleases: PropTypes.func.isRequired,
  release: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  release: state.release
});

export default connect(
  mapStateToProps,
  { getReleases }
)(NavMenu);
