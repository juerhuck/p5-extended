
let api = 'http://localhost:3000/api/v1/edgematerialtypes';

let postData = {
  code: "red-edge",
  description: "eine schöne rote Kante",
  nominalLength: 1000.0,
  nominalThickness: 2.5,
  height: 50.0,
  sensitive: false,
  category: 1
};

let putData = {
  code: "blue-edge",
  description: "eine schöne blaue Kante",
  nominalLength: 1000.0,
  nominalThickness: 2.5,
  height: 50.0,
  sensitive: false,
  category: 1
};


let id = "";

function setup() {
  createCanvas(400, 400);

  var buttonGet = select('#get');
  buttonGet.mousePressed(getEdgeMaterialTypes);

  var buttonPost = select('#post');
  buttonPost.mousePressed(postEdgeMaterialType)

  var buttonDelete = select('#delete');
  buttonDelete.mousePressed(deleteEdgeMaterialType)

  var buttonPut = select('#put');
  buttonPut.mousePressed(putEdgeMaterialType)

  var buttonGetById = select('#getById');
  buttonGetById.mousePressed(getByIdEdgeMaterialType)
}

// get
function getEdgeMaterialTypes() {
  let url = api;
  httpGet(api, 'json', true, gotResult_getEdgeMaterialTypes);
}
function gotResult_getEdgeMaterialTypes(result) {
  console.log(result);
}


// post
function postEdgeMaterialType() {
  // loadJSON(url, gotData);
  let url = api;
  httpPost(url, 'json', postData, gotResult_postEdgeMaterialType);
}

function gotResult_postEdgeMaterialType(result) {
  
  id = result.edgeMaterialType._id;
  console.log(result);
}

// delete
function deleteEdgeMaterialType() {
  let url = api + "/" + id;
  httpDo(
    url,
    {
      method: 'DELETE'
    },
    gotResult_deleteEdgeMaterialType
  );
}

function gotResult_deleteEdgeMaterialType(result) {
  console.log(result);
}

// put
function putEdgeMaterialType() {
  let url = api + "/" + id;
  httpDo(
    url,
    {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(putData), // body data type must match "Content-Type" header
    },
    gotResult_putEdgeMaterialType
  );
}

function gotResult_putEdgeMaterialType(result) {
  console.log(result);
}


// get/:id
function getByIdEdgeMaterialType() {
  let url = api + "/" + id;
  httpDo(
    url,
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      //body: JSON.stringify(putData), // body data type must match "Content-Type" header
    },
    gotResult_getEdgeMaterialType
  );
}

function gotResult_getEdgeMaterialType(result) {
  console.log(result);
}



function draw() {
  background(0);
  // if (weather) {
  //   var temp = weather.main.temp;
  //   var humidity = weather.main.humidity;
  //   ellipse(100, 100, temp, temp);
  //   ellipse(300, 100, humidity, humidity);
  // }
}