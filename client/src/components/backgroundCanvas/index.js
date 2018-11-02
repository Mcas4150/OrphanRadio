import React, { Component } from "react";
import OrbitControls from "three-orbitcontrols";
import * as THREE from "three";
import "./BackgroundCanvas.css";

export default class BackgroundCanvas extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    this.camera.position.z = 6;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#fff");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE

    let square = this.makeSquare(0.45, 0.2);
    let square2 = this.makeSquare(0.35, 0.2);
    square2.translateZ(0.65);

    let triangle = this.makeTriangle(0.3, 0.1);
    triangle.translateY(0.5);
    triangle.translateX(-2.25);
    triangle.rotateX(1.5708 * 2);
    triangle.rotateY(1.5708);

    let triangle2 = this.makeTriangle(0.3, 0.1);
    triangle2.translateY(0.5);
    triangle2.translateX(2.25);
    triangle2.rotateX(1.5708 * 2);
    triangle2.rotateY(1.5708);

    let triangle3 = this.makeTriangle(0.24, 0.1);
    triangle3.translateY(0.5);
    triangle3.translateX(1.75);
    triangle3.translateZ(0.65);
    triangle3.rotateX(1.5708 * 2);
    triangle3.rotateY(1.5708 * 0.87);

    let triangle4 = this.makeTriangle(0.24, 0.1);
    triangle4.translateY(0.5);
    triangle4.translateX(-1.75);
    triangle4.translateZ(0.65);
    triangle4.rotateX(1.5708 * 2);
    triangle4.rotateY(1.5708 * 1.13);

    this.group = new THREE.Group();
    this.group.add(square, square2, triangle, triangle2, triangle3, triangle4);
    this.group.rotateZ(1.5708);
    this.group.rotateX(1.5708);
    // group.rotateX(0.8);

    this.scene.add(this.group);

    this.start();
  }

  componentWillUnMount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  makeTriangle(x, y, z = 1, linewidth = 2) {
    let triangleShape = new THREE.Shape();

    triangleShape.moveTo(0, 0);
    triangleShape.lineTo(10, 5);
    triangleShape.lineTo(0, 10);
    triangleShape.lineTo(0, 0);

    let geometry = new THREE.ShapeGeometry(triangleShape);
    geometry.scale(x, y, z);

    let edges = new THREE.EdgesGeometry(geometry);
    let material = new THREE.LineBasicMaterial({
      color: "#0000ff",
      linewidth
    });
    return new THREE.LineSegments(edges, material);
  }

  makeSquare(x, y, z = 1, linewidth = 2) {
    let geometry = new THREE.PlaneBufferGeometry(10, 5);
    geometry.scale(x, y, z);
    let edges = new THREE.EdgesGeometry(geometry);
    let material = new THREE.LineBasicMaterial({
      color: "#0000ff",
      linewidth
    });
    return new THREE.LineSegments(edges, material);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.group.rotation.x += 0.0025;
    this.group.rotation.y += 0.0025;
    // this.group.rotation.x += this.props.point.x / 150000;
    // this.group.rotation.y += this.props.point.y / 150000;
    // this.group.rotation.z += 0.0025;

    this.frameId = window.requestAnimationFrame(this.animate);

    // this.group.rotation.x += 0.01;
    // this.group.rotation.y += 0.01;
    this.renderScene();
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        className="logo-canvas"
        // style={{
        //   width: "80vw",
        //   position: "absolute",
        //   height: "65vh",
        //   top: "35px",
        //   left: 0,
        //   color: "blue",
        //   opacity: 1,
        //   zIndex: -1
        // }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
