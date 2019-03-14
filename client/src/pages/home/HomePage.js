import React, { Component } from "react";
import BackgroundCanvas from "../../components/backgroundCanvas";
// import Modal from "../../components/modal";
import "../../components/modal/Modal.css";
import Insert1 from "../../img/insert1.jpg";
import Insert2 from "../../img/insert2.jpg";
import PepSpray1 from "../../img/pepspray1.jpg";
import Sticker from "../../img/sticker.jpg";

import NavBar from "../../components/layout/Navbar";

import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./HomePage.css";

const styles = {
  fadeIn: {
    animation: "x .5s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
    display: "grid",
    gridTemplateRows: "1fr 16fr 1fr",
    padding: "15px",
    height: "calc(100vh - 30px)"
  }
};

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
      <StyleRoot>
        <div className="homepage">
          <NavBar />
          <div className="homepage--container">
            <BackgroundCanvas
              mouseX={this.props.point.x}
              mouseY={this.props.point.y}
            />
            <Modal show={this.state.modalOpen} handleClose={this.hideModal}>
              <div className="modal--grid">
                <div className="modal--images modal--left">
                  {" "}
                  <img className="modal--image" src={Insert1} />
                  {/* <img className="modal--image" src={Insert2} /> */}
                </div>
                <div className="modal--text">
                  {" "}
                  <p>
                    Klein Zage is a woman with some really nice friends. OR.003
                    is a swift explosion of pepper spray house and feminine
                    energy UKG with remixes by Orphan. party alumni. 'Womanhood'
                    is a nihilistic declaration of menstruation. 'Absolutely' a
                    UKG masterclass in orgasm. 'She’s Out There' a self-help
                    book made by the patriarchal system. DJ Python’s remix is a
                    meditation on retaliation. KZ and Python bonded over a
                    mutual respect of lonely dance floors and late night pizza.
                    Ariel Zetina brings her love of UK bass to the floor. The
                    two bonded over Silk Road and Pulse X. Local Artist's cult
                    mix, an instant Balearic hit! The two bonded over broken
                    sinks and Overcooked. Womanhood is an EP for the pleasure
                    revolution, enjoy at your own risk.
                  </p>
                  <a
                    href="https://www.rubadub.co.uk/records/catalog/product/view/id/10035/s/womanhood-ep/
"
                    target="_blank"
                  >
                    Order Now
                  </a>
                </div>
                <div className="modal--images modal--right">
                  {/* <img className="modal--image" src={Insert2} /> */}
                  <img className="modal--image" src={Sticker} />
                </div>
                <img className="modal--image" src={PepSpray1} />
              </div>
            </Modal>
            <div className="homepage--orphan">Orphan.</div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <button onClick={handleClose}>close</button>
        {children}
      </section>
    </div>
  );
};

const PositionLabel = props => {
  const {
    detectedEnvironment: {
      isMouseDetected = true,
      isTouchDetected = false
    } = {},
    elementDimensions: { width = 1200, height = 1000 } = {},
    isActive = true,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {}
  } = props;

  return (
    <div className="example__label">
      {`x: ${x}`}
      <br />
      {`y: ${y}`}
      <br />
      {`width:: ${width}`}
      <br />
      {`height: ${height}`}
      <br />
      {`isActive: ${isActive}`}
      <br />
      {`isPositionOutside: ${isPositionOutside ? "true" : "false"}`}
      <br />
      {`isMouseDetected: ${isMouseDetected ? "true" : "false"}`}
      <br />
      {`isTouchDetected: ${isTouchDetected ? "true" : "false"}`}
    </div>
  );
};
