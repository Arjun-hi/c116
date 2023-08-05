noseX=0;
noseY=0;
function preload(){
cloun_nose= loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup()
{
  
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);
}
function draw()
{
image(video,0,0,300,300);
image(cloun_nose,noseX-18,noseY,40,40)
//fill("red");
//stroke("black");
//circle(noseX,noseY,20);
}
function takeSnapshot(){
    save("class114result.png")
}
function modelloaded(){
    console.log('poseNet is initialised');
}
function gotposes(results){
if(results.length>0){
    console.log(results)    ;
console.log("noseX="+results[0].pose.nose.x);
console.log("noseY="+results[0].pose.nose.y);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;


}
}
