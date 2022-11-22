img="";
objects=[];
status="";
objectDetector="";


function preload()
{

img = loadImage("iomgs.jpeg");


}



function setup()
{

canvas= createCanvas(600,500);
canvas.center();
objectDetector= ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML= "status- Detecting Objects";

}

function modelLoaded()
{

console.log("Model is loaded");
status = true;
objectDetector.detect(img,gotResult);


}

function gotResult(error,results)
{

if(error)
{

console.log(error); 

}
  
console.log(results);

objects = results;


}





function draw() 
{

image(img,0,0,600,500);

if( status != "" )
{

for(var i=0 ; i < objects.length ; i++ )
{

document.getElementById("status").innerHTML="status - objects Detected";

fill('#FF0000');

percent = floor(objects[i].confidence*100);

text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15 );

noFill();
stroke('#FF0000');
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
console.log(objects[i].x,objects[i].y);

}


}


}






