import React, { Component } from "react";
import OrbitControls from "three-orbitcontrols";
import * as THREE from "three";

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
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#fff");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE

    let square = this.makeSquare(0.45, 0.2);
    let square2 = this.makeSquare(0.35, 0.2);
    square2.translateZ(0.65);
    let triangle = this.makeTriangle(0.4, 0.1);
    triangle.translateY(-1.25);
    triangle.translateX(-3.5);
    triangle.rotateX(1.5708 * 2);
    triangle.rotateY(1.5708);
    let triangle2 = this.makeTriangle(0.4, 0.1);
    triangle2.translateY(-1.25);
    triangle2.translateX(3.5);
    triangle2.rotateX(1.5708 * 2);
    triangle2.rotateY(1.5708);
    // triangle2.translateY(-1);
    // triangle2.rotateY(0.8);
    // this.triangle.translate();

    this.group = new THREE.Group();
    this.group.add(square, square2, triangle, triangle2);
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
      color: "#4286f4",
      linewidth
    });
    return new THREE.LineSegments(edges, material);
  }

  makeSquare(x, y, z = 1, linewidth = 2) {
    let geometry = new THREE.PlaneBufferGeometry(10, 5);
    geometry.scale(x, y, z);
    let edges = new THREE.EdgesGeometry(geometry);
    let material = new THREE.LineBasicMaterial({
      color: "#4286f4",
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
    // this.group.rotation.x += 0.0025;
    // this.group.rotation.y += 0.0025;
    this.group.rotation.x += this.props.point.x / 150000;
    this.group.rotation.y += this.props.point.y / 150000;
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
        style={{
          width: "100vw",
          position: "absolute",
          height: "90vh",
          top: "35px",
          left: 0,
          color: "blue",
          opacity: 0.9,
          zIndex: 1,
          height: "100vh"
        }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
