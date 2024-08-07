let spacing = 25;
let r = spacing / 2;
let d;

let number;
let divider;

let num;
let angle = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  number = createSlider(1, 10, 5);
  angleMode(DEGREES);
  number.position(19, 10);
  number.size(150);

  divider = createSlider(1, 10, 3, 0.5);
  divider.position(180, 10);
  divider.size(150);
}

function draw() {
  background(0);

  // orbitControl();
  rotateX(-25);
  rotateY(angle);
  createSphereCube();

  num = number.value();

  d = divider.value();
}

function createSphereCube() {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let k = 0; k < num; k++) {
        let offset = (spacing * num) / 2 - spacing / 2;

        let x = i * spacing - offset;
        let y = j * spacing - offset;
        let z = k * spacing - offset;

        let distance = sqrt(x * x + y * y + z * z);
        push();
        stroke(0);
        translate(x, y, z);
        normalMaterial();
        let sphereSize = spacing - distance / d;
        sphere(sphereSize);
        pop();
      }
    }
  }
  angle++;
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
