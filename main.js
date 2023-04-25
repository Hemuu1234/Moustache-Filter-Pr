function preload() {

}
function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes); 
}
function take_snapshot() {
    save("You look good in moustache.png");
}
function draw() {
    image(video,0,0,300,250);

}
function modelloaded() {
    console.log("model loaded");
}
function gotposes(results) {
    if (results.length>0) {
    console.log(results);
    console.log("nose x = "+results[0].pose.nose.x);
    console.log("nose y = "+results[0].pose.nose.y);
    }
}