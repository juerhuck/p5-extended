var textbox;
var slider;
var paragraph;

var canvas;
var mic;


function windowResized() {
  // console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  clear();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  // canvas.style('z-index', '-1');
  // mic = new p5.AudioIn();
  // mic.start();

  // background(175);

  textbox = createInput('enter text');
  slider = createSlider(10, 64, 16);
  paragraph = createP('starting text');

  textbox.input(updateText); 
  slider.input(updateSize);
}

function updateText() {
  paragraph.html(textbox.value());
}

function updateSize() {
  paragraph.style("font-size", slider.value() + "pt");
}


function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
  // var vol = mic.getLevel();
  // ellipse(width/2, height/2, vol * 500);
}