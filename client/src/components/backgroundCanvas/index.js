import React, { Component } from "react";

import * as THREE from "three";
import "./BackgroundCanvas.css";

export default class BackgroundCanvas extends Component {
  componentDidMount() {
    const width = 200;
    // const width = 250 ;
    // const height = this.mount.clientHeight;
    const height = 300;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);

    if (width <= 600) {
      this.camera.position.z = 10;
    } else {
      this.camera.position.z = 7;
    }

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE

    let triY = 0.075;
    let triTransY = 0.37;
    let sqY = 0.15;
    let sq1x = 0.6;
    let sq2x = sq1x - 0.12;
    let TransZ = 0.75;

    let square = this.makeSquare(sq1x, sqY);
    let square2 = this.makeSquare(sq2x, sqY);
    square2.translateZ(TransZ);

    let triangle = this.makeTriangle(0.3, triY);
    triangle.translateY(triTransY);
    triangle.translateX(-3);
    triangle.rotateX(1.5708 * 2);
    triangle.rotateY(1.5708);

    let triangle2 = this.makeTriangle(0.3, triY);
    triangle2.translateY(triTransY);
    triangle2.translateX(3);
    triangle2.rotateX(1.5708 * 2);
    triangle2.rotateY(1.5708);

    let triangle3 = this.makeTriangle(0.234, triY);
    triangle3.translateY(triTransY);
    triangle3.translateX(2.4);
    triangle3.translateZ(TransZ);
    triangle3.rotateX(1.5708 * 2);
    triangle3.rotateY(1.5708 * 0.835);

    let triangle4 = this.makeTriangle(0.234, triY);
    triangle4.translateY(triTransY);
    triangle4.translateX(-2.4);
    triangle4.translateZ(TransZ);
    triangle4.rotateX(1.5708 * 2);
    triangle4.rotateY(1.5708 * 1.165);

    this.group = new THREE.Group();
    this.group.add(square, square2, triangle, triangle2, triangle3, triangle4);

    //Auto-rotate script
    this.group.rotateZ(1.5708 * 3);
    this.group.rotateX(1.5708);


    // this.group.rotate(120);
    // this.group.rotation.y = 120
    this.scene.add(this.group);

    this.start();
  }

  componentWillUnmount() {
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
      color: "#fff",
      linewidth
    });
    return new THREE.LineSegments(edges, material);
  }

  makeSquare(x, y, z = 1, linewidth = 2) {
    let geometry = new THREE.PlaneBufferGeometry(10, 5);
    geometry.scale(x, y, z);
    let edges = new THREE.EdgesGeometry(geometry);
    let material = new THREE.LineBasicMaterial({
      color: "#fff",
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
    // const division = 30000;

    // if (this.props.mouseX <= this.mount.clientWidth / 2) {
    //   this.group.rotation.x -= 0.0025 + this.props.mouseX / division;
    // } else {
    //   this.group.rotation.x += 0.0025 + this.props.mouseX / division;
    // }

    // if (this.props.mouseY <= this.mount.clientHeight / 2) {
    //   this.group.rotation.Y -= 0.0025 + this.props.mouseY / division;
    // } else {
    //   this.group.rotation.Y += 0.0025 + this.props.mouseY / division;
    // }

    // this.group.rotation.y += 0.0025 + this.props.mouseY / 3500;
    // this.group.rotation.x += 0.00525 + this.props.mouseX / 35000;
this.group.rotateX(0.008);
    // this.group.rotation.y += 0.0025 * (this.props.mouseY / 500);
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
        style={{
          // height: "calc(40vh -30px)"
        }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
