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
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateCanvas();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    // ctx.fillRect(0, 0, 100, 1000);
    ctx.moveTo(0,0);
    ctx.lineTo(350,0);
    ctx.lineTo(75, 75);
    ctx.lineTo(75, window.innerHeight - 75);
    ctx.lineTo(350, window.innerHeight);
    ctx.lineTo(0, window.innerHeight );
    ctx.lineTo(0,0);
    ctx.fillStyle = this.props.color;
    ctx.fill();
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    // return <canvas ref="canvas" width={300} height={this.state.height} />;
    return <canvas ref="canvas" width={350} height={1000} style={{position: "fixed", zIndex: "2",
      left: 0}} />;
  }
}
