import p5 = require('p5');

export let p: p5;
new p5((p5: p5) => {
    p = p5;
    p.setup = setup;
    p.draw = draw;
});

function setup() {
  p.createCanvas(250, 350);
  p.background('red')
}

function draw() {

}

function drawSnowflakes() {

}

function drawSnowMan() {
  
}