function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id('backgroundCanvas');
}

function draw() {
  background(220, 220, 240);
  noStroke();
  fill(200,200,250)
  let t = millis() / 3000 % 1
  t = (1 - cos((t % 0.5 * 2) * PI)) / 2 / 2 + floor(t * 2) / 2
  let s = 40
  noStroke()
  for (let i = -1; i < width / s + 1; i ++) {
    for (let j = -1; j < height / s + 1; j ++) {
      fill((i + j) % 2 ? 0 : 97)
      if (t < 0.5) {
        rect((i - t * 2 * (j % 2 ? -1 : 1)) * s, j * s, s, s)
      } else {
        rect((i - 1) * s, (j - (t * 2 - 1) * (i % 2 ? -1 : 1)) * s, s, s)
      }
    }
  }
  fill(0,0,255,64)
  rect(0,0,windowWidth,windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}