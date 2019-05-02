var weather;

//https://openweathermap.org/current


function setup() {
  createCanvas(400, 200);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4&units=metric', gotData);
}


function gotData(data) {
  // console.log(data);
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humedity);
  }
}