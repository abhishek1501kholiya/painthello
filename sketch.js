

var database;
var engine, world;
var drawing = [];
var cursorimage;
var currentPath ;
var drwto = [];
var paint
var clear;
var isDrawing = false;
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    background(0);
    //clear = createButton('clear');
    //clear.position(400,600);
    database = firebase.database();

var clearbutton = createButton('clear');
clearbutton.position(400,600);
clearbutton.mousePressed(clearDrawing);

    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

    cursorimage = loadImage("Sprites/drwaing.jpg");
    paint = database.ref("drawing");
    paint.on("value", (data)=> {
    drwto = data.val().db;
    })
  



}
function clearDrawing(){
  isDrawing =false;
  currentPath = [];
}

function startPath(){
  currentPath  = [];
  drawing.push(currentPath);

}
function endPath(){
  isDrawing = false;
 }
//function endPath(){
  
//}

function draw(){
 console.log("Entered function draw"); 
 if(isDrawing){
  var point = {
    x: mouseX,
    y: mouseY
  }
    //  cursor(cursorimage);
      console.log("Entered mouseIspresssed");
      currentPath.push(point);
      database.ref('drawing').set({
        'db':currentPath
      })
 }    
    
beginShape();
stroke("red");
strokeWeight(4);
noFill();
console.log("in draw fun"+ drwto);

    for(var x = 0 ; x<drwto.length ; x++){
   //  var path  = drwto[x];
    
    // for(var j = 0 ; j<path.length ; j++){
      vertex(drwto[x].x,drwto[x].y)
     
  //  }
    endShape();
    }
  
  }










 //async function changebackground(){
 // var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responseJSON = await response.json();
  //var datetime = responseJSON.datetime;
  //var time = datetime.slice(11,13);
  //console.log(time);

//  if(time<=6 && time>=18){
 // bg = 0;
 // }else{
   // bg = 255;
  //}
//}

