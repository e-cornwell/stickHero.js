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
}

function generatePlatform() {
  const minimumGap = 40;
  const maximumGap = 200;
  const minimumWidth = 20;
  const maximumWidth = 100;

  //X coordinate of the right edge of the furthest platform
  const lastPlatform = platforms[platforms.length - 1];
  let furthestX = lastPlatform.x + lastPlatform.w;

  const x =
    furthestX +
    minimumGap +
    Math.floor(Math.random() * (maximumGap - minimumGap));
  const w =
    minimumWidth + Math.floor(Math.random() * (maximumWidth - minimumWidth));
  platforms.push({ x, w });
}

draw();

function draw() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  let platforms = [
    { x: 50, w: 50 },
    { x: 90, w: 30 },
  ];

  function drawPlatforms() {
    platforms.forEach(({ x, w }) => {
        //Draw platform
        ctx.fillStyle = "black";
        ctx.fillRect(x, canvasHeight - platformHeight, w, platformHeight);
    });
  };

  function drawHero() {
    const heroWidth = 20;
    const heroHeight = 30;

    ctx.fillStyle = "red";
    ctx.fillRect(
        heroX,
        heroY + canvasHeight - platformHeight - heroHeight,
        heroWidth,
        heroHeight
    );
  };

  //Save the current transformation
  ctx.save();

  //Shifting the view
  ctx.translate(-sceneOffset, 0);

  //Draw scene
  drawPlatforms();
  drawHero();
  drawSticks();

  //Restore transformation to the last save
  ctx.restore();
}

window.addEventListener("mousedown", function (event) {});

window.addEventListener("mouseup", function (event) {});

function animate(timeStamp) {}
