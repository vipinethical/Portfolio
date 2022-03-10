import React, { useEffect } from "react";

const Bubbles = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cntxt = canvas.getContext("2d");

    function Bubble(x, y, dy, radius) {
      this.x = x;
      this.y = y;
      this.dy = dy;
      this.radius = radius;

      this.draw = function () {
        cntxt.beginPath();
        cntxt.beginPath();
        cntxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // cntxt.strokeStyle = "#87BCDE";
        // cntxt.stroke();

        cntxt.fillStyle = "rgba(255,255,255, 0.1)";
        cntxt.fill();
      };

      this.update = function () {
        if (this.y + this.radius < 0) {
          this.y = window.innerHeight;
          this.x = Math.random() * window.innerWidth;
        }

        this.y -= this.dy;

        this.draw();
      };
    }

    let bubArray = [];

    for (let i = 0; i < 90; i++) {
      let radius = Math.random() * (1 - 5) + 5;
      let x = Math.random() * (window.innerWidth - radius * 2) + radius;
      let y = Math.random() * window.innerHeight;
      let dy = Math.random() * (2 - 0.5) + 1;

      bubArray.push(new Bubble(x, y, dy, radius));
    }

    function animate() {
      requestAnimationFrame(animate);
      cntxt.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < bubArray.length; i++) {
        bubArray[i].update();
      }
    }

    // console.log(bubArray);

    animate();
  }, []);

  return <canvas></canvas>;
};

export default Bubbles;
