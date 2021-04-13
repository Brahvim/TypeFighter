let n = '';
const cX = window.innerWidth / 2, cY = window.innerHeight / 2;
let ChangaOne_Italic;
function preload() {
    ChangaOne_Italic = loadFont("./assets/fonts/ChangaOne-Italic.ttf");
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    fill(255); textAlign(CENTER);
    textFont(ChangaOne_Italic);
    textSize(50); strokeWeight(5);
    fill('red'); stroke('orange');
}

var lastTyped = 0, w = "";
var moveset = ["kick", "punch"];
var px = 0, py = 0;
var canMove = true;
var gravAccel = 0.003, gravVel = 0.0;

function draw() {

    if (w != "") {
        for (let i = 0; i <= moveset.length; i++) {
            if (w.toLowerCase() == moveset[i]) w = "";
        }
    }
    if (keyIsDown(13)) w = "";

    background(0);
    text(w, cX, cY);

    if (lastTyped + 625 < millis()) w = "";

}

function keyTyped() {
    lastTyped = millis();
    n = key;
    w = w + n;
}