const canvas = document.querySelector(".circle-canvas");
canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 20;
  canvas.style.width = canvas.width + "px";
  canvas.style.height = canvas.height + "px";

class Circle {
constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.fillStyle = this.fillColor;
    context.fill();
    // context.noStroke();
    // context.closePath();
  }
}

function renderCircle(x, y ,r ,color) {
  const y = (x-x/10);
  const r = (x/6);
  
  return new Circle(x, y, r, 0, 2 * Math.PI, color);
}


// canvas.addEventListener("mousemove", ()=> {
renderCircle(210, 200 ,50, "#EEEE00").draw();
renderCircle(190, 190 ,5, "#000000").draw();
renderCircle(220, 190 ,5, "#000000").draw();
renderCircle(180, 210 ,8, "#ffb2b2").draw();
renderCircle(220, 210 ,8, "#ffb2b2").draw();
new Circle(200, 220, 18, 2* Math.PI, 3* Math.PI, "#ff0000").draw();
// });
