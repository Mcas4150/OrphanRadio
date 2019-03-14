import React, { Component } from "react";
import { NavLink} from "react-router-dom";
import NavBar from "../../components/layout/Navbar";
import Schedule from "../../components/schedule/Schedule2";
import "./RetailPage.css";


export default class RetailPage extends Component {


  render() {
    return (
    
        <div className="retail-page">
          <NavBar />
        
          <div className="retail-page--mobile-sublinks">
            {/* <NavLink
              className="retail-page--mobile-sublink"
              activeClassName="active"
              to={`/records/`}
            >
              Records
            </NavLink>

            <NavLink
              className="retail-page--mobile-sublink"
              activeClassName="active"
              to={`/roster/`}
            >
              Roster
            </NavLink> */}
          </div>
          
          <div className="retail-page--main">
            <div className="retail-page--title">
              <div className="retail-page--title__text">RETAIL.</div>
            </div>
            <div className="retail-page--carousel">
              <div className="retail--item">
              <img className="retail--image" src="https://f4.bcbits.com/img/0015763424_36.jpg" alt="t-shirt"/>
              <a href="https://orphanrecordsradio.bandcamp.com/merch/womanhood-long-sleeve-tee" target="_blank" rel="noopener noreferrer"><div className="retail--price">
              $35
              </div></a>
            
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
     
    );
  }
}
