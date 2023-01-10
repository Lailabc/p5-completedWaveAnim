let x = 0;
let y = 0;
let theta = 0;
let increment = 0.05; // the amount to increment the offset each frame//
let offset = 0; // the amount offset from beginning of wave//
let amplitude;
let frequency;
let maxAngle;
function setup() {
    amplitude = windowHeight / 10;
    frequency = windowWidth / 0.5;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);


}
function draw() {
    background(0);
    noStroke();
    let length = 20;

    while (theta < maxAngle + offset) {
        // amplitude = sin(theta - offset)* (windowHeight/2);
        amplitude = ((theta-offset)/maxAngle)* (windowHeight/2)
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 0.05)) * amplitude;
            fill(255 - (255/length * i), 0, 255 );
            // ellipse(x, y + height / 2, 16);
            square(x,height/2 + y,16);
        }
        for (i = length; i > 0; i--) {
            y = cos(theta - (i * 0.05)) * amplitude;
            fill(255 - (255/length * i), 255, 0 );
            // ellipse(x, y + height / 2, 16);
            square(x,height/2 + y,16);
        }
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
       
    }
    offset += increment;
    theta = offset;

}
