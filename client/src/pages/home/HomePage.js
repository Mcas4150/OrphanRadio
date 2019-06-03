import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas";
import NavBar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import LeftCanvas from "../../components/layout/LeftCanvas";
import "./HomePage.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
  }

  hideModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="homepage">
        <NavBar color={"white"}/>
        <div className="homepage--container">
          {/* <BackgroundCanvas
              mouseX={this.props.point.x}
              mouseY={this.props.point.y}
            /> */}
            {/* <LeftCanvas/> */}
          <div className="homepage--orphan">Orphan.



          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
