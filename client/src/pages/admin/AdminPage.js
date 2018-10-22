import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import ArtistForm from "../../components/artists/ArtistsForm";
import "./AdminPage.css";

export default class AdminPage extends Component {
  render() {
    return (
      <div className="admin-page">
        <NavBar />
        Admin Page
        <div className="admin--actions__grid">
          <div className="admin--actions__add-artist">
            <div className="admin--actions__form">
              Add Artist
              <ArtistForm />
            </div>
          </div>
          <div className="admin--actions__add-release">
            <div className="admin--actions__form">Add Release</div>
          </div>
          <div className="admin--actions__add-resident">
            <div className="admin--actions__form">Add Resident</div>
          </div>
          <div className="admin--actions__add-archive">
            <div className="admin--actions__form">Add Archive</div>
          </div>
          <div className="admin--actions__add-upcoming">
            <div className="admin--actions__form">Add Upcoming</div>
          </div>
          <div className="admin--actions__add-past">
            <div className="admin--actions__form">Add Past</div>
          </div>
        </div>
      </div>
    );
  }
}