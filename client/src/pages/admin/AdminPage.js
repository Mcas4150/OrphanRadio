import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import ArtistForm from "../../components/artists/ArtistsForm";
import ReleaseForm from "../../components/releases/ReleasesForm";
import UpcomingForm from "../presents/UpcomingForm";
import PastForm from "../presents/PastForm";
import "./AdminPage.css";

export default class AdminPage extends Component {
  render() {
    return (
      <div className="admin-page">
        <NavBar />
        Admin Page
        <div className="admin--actions__grid">
          <div className="admin--card admin--actions__add-artist">
            <div className="admin--actions__form">
              Add Artist
              <ArtistForm />
            </div>
          </div>
          <div className="admin--card admin--actions__add-release">
            <div className="admin--actions__form">
              Add Release
              <ReleaseForm />
            </div>
          </div>
          <div className="admin--card admin--actions__add-upcoming">
            <div className="admin--actions__form">
              Add Upcoming
              <UpcomingForm />
            </div>
          </div>
          <div className="admin--card admin--actions__add-past">
            <div className="admin--actions__form">
              Add Past
              <PastForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
