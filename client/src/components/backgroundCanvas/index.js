import React, { Component } from "react";
import "./BackgroundCanvas.css";

export default class BackgroundCanvas extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    var width = window.innerWidth * 2;
    var height = window.innerHeight;
    var context = canvas.getContext("2d");
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    canvas.addEventListener("mousemove", getMouse, false);
    var mouseX = 550;
    var mouseY = 550;

    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    var fov = 500;

    var point = [];
    var point3d = [];
    var angleX = 0;
    var angleY = 0;
    var HALF_WIDTH = width / 1.25;
    var HALF_HEIGHT = height / 2;

    var x3d = 0;
    var y3d = 0;
    var z3d = 0;

    var firstx2d = 0;
    var firsty2d = 0;
    var firstScale = 0;
    var lastScale = 0;
    var lastx2d = 0;
    var lasty2d = 0;

    var elements = 100;
    var x,
      y = 0;
    var lastX,
      lastY = 0;
    var firstX,
      firstY = 0;
    var r1,
      r2 = 0;
    //    var spacing = (Math.PI * 2) / elements;
    var m = 0;
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var b = 1;
    var a = 1;

    // The below code creates a sphere of points
    var dim = 50; // This is the number of rings
    // Each ring has as many points as there are rings
    // This is the spacing for each ring
    var spacing = (Math.PI * 2) / dim;
    // This is the total number of points
    var numPoints = dim * dim;

    // This is the size.
    var size = 15;

    var counter = 0;

    function draw() {
      var mouseX1 = mouseX / 200;
      var mouseY1 = mouseY / 200;
      //var mouseY1=1;

      m = Math.floor((mouseY / height) * 30);
      n1 = (mouseX / width) * 10;

      //change these to different things for different shapes.
      n2 = n3 = n1;

      // We're doing the geometery in the draw loop because we want to interact with it.

      var points = [];
      // Now we build the geom

      // This is a sphere just like before
      for (var i = 0; i < dim; i++) {
        //Use r to calculate x and y
        var z = size * Math.cos((spacing / 2) * i) * (dim / 8);

        // Calculate the size of the current ring
        var s = size * Math.sin((spacing / 2) * i);

        // For each ring

        for (var j = 0; j < dim; j++) {
          r1 =
            size *
            Math.pow(
              Math.pow(Math.abs(Math.cos((m * spacing * j) / 4) / a), n2) +
                Math.pow(Math.abs(Math.sin((m * spacing * j) / 4)) / b, n3),
              -(1 / n1)
            );
          // Create a circle at the current size, at the current depth

          var point = [
            r1 * Math.cos(spacing * j) * s,
            r1 * Math.sin(spacing * j) * s,
            z
          ];

          // Add the points
          points.push(point);
        }
      }

      context.fillStyle = "rgb(255, 255, 255)";
      context.fillRect(0, 0, width, height);

      // angleX+=((mouseX/width)-0.5)/4;
      // angleY+=((mouseY/height)-0.5)/4;

      angleX += 0.01;
      angleY += 0.01;

      // Here we run through each ring and work out where it should be drawn

      for (var i = 0; i < numPoints; i += dim) {
        for (var j = 0; j < dim; j++) {
          point3d = points[Math.floor(i + j)];
          z3d = point3d[2];

          // This is the speed of the z
          // It moves the points forwards in space
          // We don't need it for the pure rotate
          // z3d -= 1.0;

          // Check that the points aren't disappearing into space and if so push them back
          // This also stops them stretching
          // When they get too close
          if (z3d < -fov) z3d += 0;

          point3d[2] = z3d;

          // Calculate the rotation

          rotateX(point3d, angleX);
          rotateY(point3d, angleY);

          // Get the point in position

          x3d = point3d[0];
          y3d = point3d[1];
          z3d = point3d[2];
          // Convert the Z value to a scale factor
          // This will give the appearance of depth
          var scale = fov / (fov + z3d);

          // Store the X value with the scaling
          // FOV is taken into account
          // (just pushing it over to the left a bit too)
          var x2d = x3d * scale + HALF_WIDTH / 2;

          // Store the Y value with the scaling
          // FOV is taken into account

          var y2d = y3d * scale + HALF_HEIGHT;

          // // If our main loop is going to join all the points together in a line, we need to store the first points and use them at the end.

          if (j === 0) {
            firstx2d = x2d;
            firsty2d = y2d;
            firstScale = scale;

            lastx2d = x2d;
            lasty2d = y2d;
            lastScale = scale;
          }

          // Draw the point

          // Set the size based on scaling
          context.lineWidth = scale;

          // context.strokeStyle = "rgba(" + i +"," + j +"," + 0 + "," + scale/2 + ")";

          context.strokeStyle = "#0000FF";
          context.beginPath();
          context.moveTo(lastx2d + lastScale, lasty2d);
          context.lineTo(x2d + scale, y2d);
          context.stroke();

          // Store the last point so we can join it to the next one.

          lastx2d = x2d;
          lasty2d = y2d;
          lastScale = scale;

          // if it's the end of the current ring, join it to the first

          if (j === dim - 1) {
            context.lineWidth = scale;

            //context.strokeStyle = "rgb(255,255,255)";
            context.beginPath();
            context.moveTo(lastx2d + lastScale, lasty2d);
            context.lineTo(firstx2d + firstScale, firsty2d);
            context.stroke();
          }
        }
      }
    }

    setInterval(draw, 50);

    function rotateX(point3d, angleX) {
      var x = point3d[0];
      var z = point3d[2];

      var cosRY = Math.cos(angleX);
      var sinRY = Math.sin(angleX);

      var tempz = z;
      var tempx = x;

      x = tempx * cosRY + tempz * sinRY;
      z = tempx * -sinRY + tempz * cosRY;

      point3d[0] = x;
      point3d[2] = z;
    }

    function rotateY(point3d, angleY) {
      var y = point3d[1];
      var z = point3d[2];

      var cosRX = Math.cos(angleY);
      var sinRX = Math.sin(angleY);

      var tempz = z;
      var tempy = y;

      y = tempy * cosRX + tempz * sinRX;
      z = tempy * -sinRX + tempz * cosRX;

      point3d[1] = y;
      point3d[2] = z;
    }

    function getMouse(mousePosition) {
      //for other browsers..
      if (mousePosition.layerX || mousePosition.layerX === 0) {
        // Firefox?
        mouseX = mousePosition.layerX;
        mouseY = mousePosition.layerY;
      } else if (mousePosition.offsetX || mousePosition.offsetX === 0) {
        // Opera?
        mouseX = mousePosition.offsetX;
        mouseY = mousePosition.offsetY;
      }
    }
  }

  render() {
    return <canvas ref="canvas" />;
  }
}
