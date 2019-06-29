import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./NavMenuMobile.css";
import BackgroundCanvas from "../backgroundCanvas";
import NavMenuButton from "./NavMenuButton";
import { getReleases, getRelease } from "../../actions/releaseActions";

class NavMenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentColor: "white"
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeRelease = this.changeRelease.bind(this);
  }

  componentWillMount() {
    this.props.getReleases();
  }

  // handleUnClick() {
  //   if (this.state.open === true) this.setState({ open: false });
  // }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  //   }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.open !== this.state.open) {
  //     this.setState({ open: nextProps.open });
  //   }
  // }

  changeRelease(release) {
    this.props.getRelease(release._id);
    this.setState({ currentColor: release.color });
  }

  render() {
    const { releases } = this.props.release;
    const { open } = this.props;
    const sortedReleases = releases.sort(function(a, b) {
      if (a.catalog < b.catalog) {
        return -1;
      }
      if (a.catalog > b.catalog) {
        return 1;
      }
      return 0;
    });

    return (
      <div className="navMenu-container">
        {open ? (
          <div className="navMenuMobile">
            <div className="navMenuMobile--list">
              <Link
                className="navMenuMobile--link navMenuMobile--link__top"
                to="/home"
              >
                Orphan.
              </Link>
              <hr />
              <NavLink
                className="navMenuMobile--link link-records"
                activeClassName="active-records"
                to="/records/"
              >
                Records.
              </NavLink>
              <br />
              <NavLink
                className="navMenuMobile--link link-ragers"
                exact
                activeClassName="active-ragers"
                to="/ragers"
              >
                Events.
              </NavLink>
              <br />
              <NavLink
                className="navMenuMobile--link link-retail"
                exact
                activeClassName="active-retail"
                to="/retail"
              >
                Retail.
              </NavLink>
            </div>
            <div className="links-container">
              {sortedReleases &&
                sortedReleases.map((release, index) => {
                  return (
                    <NavLink
                      className={"releases--sublinks__link sublink"}
                      exact
                      activeClassName="releases--sublinks__link sublink active-link"
                      activeStyle={{ color: release.color }}
                      to={{ pathname: `/records/${release._id}` }}
                    >
                      <div onClick={() => this.changeRelease(release)}>
                        {release.catalog}.
                      </div>
                    </NavLink>
                  );
                })}
            </div>
            <div className="navMenuMobile--footer-container">
              <div className="navMenuMobile--image-container">
                <BackgroundCanvas color={this.state.currentColor} />
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
        ) : (
          <div className="navbar--panel">
            <NavMenuButton open={open} />
          </div>
        )}
      </div>
    );
  }
}

NavMenuMobile.propTypes = {
  getReleases: PropTypes.func.isRequired,
  getRelease: PropTypes.func.isRequired,
  release: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  release: state.release
});

export default connect(
  mapStateToProps,
  { getReleases, getRelease }
)(NavMenuMobile);
