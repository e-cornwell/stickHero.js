//GAME STATE
let phase = "waiting";
let lastTimestamp;
let heroX;
let heroY;
let sceneOffset;

let platforms = [];
let sticks = [];

let score = 0;

//CONFIGURATION

//Get canvas element
const canvas = document.getElementById("game");

//Get drawing context
const ctx = canvas.getContext("2d");

//Config
const canvasWidth = 375;
const canvasHeight = 375;
const platformHeight = 100;


//UI Elements
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart");

//Start game
resetGame();

//Reset gamestate and layout
function resetGame() {
    // Reset game state
    phase = "waiting";
    lastTimestamp = undefined;

    //First platform always the same
    platforms = [{ x: 50, w: 50 }];
    generatePlatform();
    generatePlatform();
    generatePlatform();
    generatePlatform();

    //Init hero position
    heroX = platforms[0].x + platforms[0].w - 30; //Hero starts near edge 
    heroY = 0;

    //How much the screen shifts back
    sceneOffset = 0;

    //Always a stick, even when invisible.
    sticks = [{ x: platforms[0].x + platforms[0].w, length: 0, rotation: 0 }];

    //Score
    score = 0;

    //Reset UI
    restartButton.style.display = "none"; //Hide reset button
    scoreElement.innerText = score; // Reset score display

    draw();
};

function generatePlatform() {
    const minimumGap = 40;
    const maximumGap = 200;
    const minimumWidth = 20;
    const maximumWidth = 100;

    //X coordinate of the right edge of the furthest platform
    const lastPlatform = platforms[platforms.length - 1 ];
    let furthestX = lastPlatform.x + lastPlatform.w;

    const x = 
        furthestX +
        minimumGap +
        Math.floor(Math.random() * (maximumGap - minimumGap));
    const w = 
        minimumWidth + Math.floor(Math.random() * (maximumWidth - minimumWidth));
    platforms.push({x, w});
};

draw();

function draw() {

};

window.addEventListener("mousedown", function(event) {

});

window.addEventListener("mouseup", function(event) {

});

function animate(timeStamp) {

};
