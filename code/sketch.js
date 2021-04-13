// "use strict";
let n = '';
const cX = window.innerWidth / 2, cY = window.innerHeight / 2;
var ChangaOne_Italic;
function preload() {
    ChangaOne_Italic = loadFont("../assets/fonts/ChangaOne-Italic.ttf");
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    fill(255); textAlign(CENTER);
    textFont(ChangaOne_Italic);
    textSize(50); strokeWeight(5);
    fill('red'); stroke('orange');
    // px = mouseX; py = mouseY;
}

var lastTyped = 0, w = "";
var valid = ["kick", "punch"];
var px = 0, py = 0;
var canMove = true;
var gravAccel = 0.003, gravVel = 0.0;
// invalid = ["Enter"];

function draw() {
    // graveAccel += px;
    background(0);
    n = '';
    // if (mouseIsPressed && canMove) {
    // px += (mouseX - px) * 0.125;
    // py += (mouseY - py) * 0.125;
    // } else {
    // gravVel += gravAccel;
    // py += gravVel;
    // }
    // fill(155); noStroke();
    // rect(px, py, 20, 20);
    // fill('red'); stroke('orange');
    text(w, cX, cY);
    if (keyIsDown(13)) w = "";
    if (w != "") {
        for (let i = 0; i <= valid.length; i++) {
            if (w.toLowerCase() == valid[i]) w = "";
        }
    }
    if (lastTyped + 625 < millis()) w = "";
}

function keyTyped() {
    lastTyped = millis();
    n = key;
    w = w + n;
}