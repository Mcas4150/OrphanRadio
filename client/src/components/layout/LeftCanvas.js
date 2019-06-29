import React, { Component } from "react";
import "./LeftCanvas.css";

export default class LeftCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.updateCanvas();
  }

  componentDidUpdate(){
    this.updateCanvas();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    const height = window.innerHeight;
    // ctx.fillRect(0, 0, 100, 1000);
    ctx.moveTo(0, 0);
    ctx.lineTo(height / 2, 0);
    ctx.lineTo(height / 10, height / 10);
    ctx.lineTo(height / 10, height - height / 10);
    ctx.lineTo(height / 2, height);
    ctx.lineTo(0, height);
    ctx.lineTo(0, 0);
    ctx.fillStyle = this.props.color;
    ctx.fill();
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    // return <canvas ref="canvas" width={300} height={this.state.height} />;
    return (
      <canvas
        className="canvas"
        ref="canvas"
        width={window.innerHeight / 2}
        height={window.innerHeight}
        style={{ position: "fixed", zIndex: "2", left: 0 }}
      />
    );
  }
}
