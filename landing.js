var x = [];
var y = [];
var num = 30;
var length = 5;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("landing");
  for (let i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
  let phrases = [
    "PROGRAMMER",
    "DESIGNER",
    "WRITER",
    "ARTIST",
    "FEMINIST"
  ];
  let text = new Text(document.getElementById("text"));
  let counter = 0;

  function start() {
    text.next(phrases[counter]).then(() => {
      setTimeout(start, 800);
    });
    counter = (counter + 1) % phrases.length;
  }
  start();
  if (windowWidth < 992) {
    noLoop();
    setTimeout(() => background(255), 1000);
  }
}

function draw() {
  background(255);
  drag(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    drag(i + 1, x[i], y[i]);
  }
}

function drag(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * length;
  y[i] = yin - sin(angle) * length;
  push();
  translate(x[i], y[i]);
  rotate(angle);
  strokeWeight(7);
  if (i == 0 || i == num - 1)
    strokeCap(SQUARE);
  stroke(0);
  line(0, 0, length, 0);
  pop();
}

class Text {
  constructor(element) {
    this.element = element;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  next(text2) {
    let text1 = this.element.innerText;
    let length = Math.max(text1.length, text2.length);
    let promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      let from = text1[i] || "";
      let to = text2[i] || "";
      let start = Math.floor(Math.random() * 40);
      let end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end
      });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else
        output += from;
    }
    this.element.innerHTML = output;
    if (complete === this.queue.length)
      this.resolve();
    else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}