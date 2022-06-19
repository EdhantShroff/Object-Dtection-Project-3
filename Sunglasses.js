objects = [];
Status = "";
img = "";

function setup(){
    canvas = createCanvas(640,300);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting object  " + "<span class='glyphicon glyphicon-cog'></span>"
}

function modelloaded(){
    console.log("Model is working neat and fine");
    objectdetector.detect(img,gotresults);
    Status = true;
}

function gotresults(error,results){
    if (error){
        console.log(error);
    }
    else {
      console.log(results);
      objects = results;
    }
}

function preload(){
   img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,300);
   
    if (Status != "") {
        for (i = 0; i < objects.length; i++){
            
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("green");
            noFill();
            stroke("green");
            text(objects[i].label + " " + floor(objects[i].confidence * 100) + "%",objects[i].x + 10,objects[i].y + 10);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
    
}


