import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import ReleaseForm from "../../components/releases/ReleasesForm";

import "./AdminPage.css";

export default class AdminPage extends Component {
  render() {
    return (
      <div className="admin-page">
        <NavBar />
        Admin Page
        <div className="admin--actions__grid">
          <div className="admin--card admin--actions__add-release">
            <div className="admin--actions__form">
              Add Release
              <ReleaseForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
