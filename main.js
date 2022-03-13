function preload(){
video = createVideo("video.mp4");
}


function setup(){
canvas = createCanvas(600,750);
canvas.center();
video.hide()
}


function draw(){
image(video,0,0,600,750);
}