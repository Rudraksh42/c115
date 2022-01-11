function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(400, 400)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log(" posenet is initialized");
}


function draw() {
    image(video, 0, 0, 400, 400);
}

function take_snap() {
    save('cloneface.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("x value of nose = " + results[0].pose.nose.x);
        console.log("y value of nose = " + results[0].pose.nose.y);
    }

}