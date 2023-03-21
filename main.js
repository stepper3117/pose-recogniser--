noseX=0;
noseY=0;


function preloaad() {
mustache = loadImage('https://tse3.mm.bing.net/th?id=OIP.FuZAw9pnSAZ7LqCplcWTSAHaDr&pid=Api&P=0')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x-15);
        console.log("nose y = " + results[0].pose.nose.y-15);
    }
}

function modelloaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}
