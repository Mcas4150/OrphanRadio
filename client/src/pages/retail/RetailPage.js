import React, { Component } from "react";
import NavBar from "../../components/layout/Navbar";
import "./RetailPage.css";

export default class RetailPage extends Component {
  render() {
    return (
      <div className="retail-page">
        <NavBar color={"red"} />

        <div className="retail-page--mobile-sublinks" />

        <div className="retail-page--main">
          <div className="retail-page--title">
            <div className="retail-page--title__text">RETAIL.</div>
          </div>
          <div className="retail-page--carousel">
            <div className="retail--item">
              <a
                href="https://orphanrecordsradio.bandcamp.com/merch/womanhood-long-sleeve-tee"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  className="retail--image"
                  src="https://i.imgur.com/YI1aJoL.png"
                  alt="t-shirt"
                />
                <div className="retail--price">$30</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
