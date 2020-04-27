//create all the variables


var database;
var firebase;

var drawing = [];

var currentPath = [];

//namespace the functions form html
const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');

function setup() {
  //create the canvas
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  
   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAvC8vS0xUBxzK2mRBIuFuBB7ABw6kMY3g",
    authDomain: "soft-paint.firebaseapp.com",
    databaseURL: "https://soft-paint.firebaseio.com",
    projectId: "soft-paint",
    storageBucket: "soft-paint.appspot.com",
    messagingSenderId: "416609708899",
    appId: "1:416609708899:web:0edaf0279e70adc41c0156"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  database = firebase.database();
  
  //make the drawing with mouse
  canvas.mousePressed(startPath);
 
}

//create the start path function
function startPath()
{
  currentPath = [];
  drawing.push(currentPath);
}



function draw() {
  
  //clear the background
  background(0);
  
  //write the propeties for point when mouse is pressed
  if(mouseIsPressed)
     {
       var point = {
         x:mouseX,
         y:mouseY,
         color: colorInput.value,
         weight: weight.value
       }
     currentPath.push(point);
     }
  
 //run a loop for giving the drawing  color and stroke weight
  for(var i = 0;i < drawing.length;i++)
  {
    beginShape();
    var path = drawing[i];
    for(var j = 0;j < path.length;j++){
      stroke(path[j].color);
  strokeWeight(path[j].weight);
  noFill();
   vertex(path[j].x , path[j].y) 
    
    }
    endShape();   
  }
    
}
