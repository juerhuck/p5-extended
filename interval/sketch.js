// var lineX = 0;

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(51);
  
//   stroke(255);
//   line(lineX, 0, lineX, height);
 
//   lineX = lineX + 5;
//   if (lineX > width) {
//     lineX = 0;
//   }
// }

var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';

var issX = 0;
var issY = 0;

function setup() {
  createCanvas(600, 400);

  setInterval(askISS, 1000);
  //loadJSON(url, gotData, 'jsonp')
}

function askISS() {
  loadJSON(url, gotData, 'jsonp')
}

function gotData(data) {
  // console.log(data);
  // console.log(data.iss_position.latitude);
  
  // issX = data.iss_position.latitude;
  // issY = data.iss_position.longitude;
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  issX = map(lat, 0, 10, 0, width);
  issY = map (long, -125, -115, 0, height);
  
  // console.log(height);
  // console.log(width);
  // console.log(lat);
  // console.log(long);
  // console.log(issX);
  // console.log(issY);
}

function draw() {
  background(51);

  fill(255);
  ellipse(issX, issY, 24, 24);
  
  stroke(255);
  line(lineX, 0, lineX, height);
 
  lineX = lineX + 5;
  if (lineX > width) {
    lineX = 0;
  }
}