var weather;

//https://openweathermap.org/current
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=001b0f58045147663b1ea518d34d88b4&units=metric';

function setup() {
  createCanvas(400, 200);
  loadJSON(url, gotData);
}


function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
  }
}