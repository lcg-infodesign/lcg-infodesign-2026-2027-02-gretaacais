function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  
  let numeroGlifi = 25; 
  let numeroColonne = sqrt(numeroGlifi);
  let numeroRighe = sqrt(numeroGlifi);

  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  for (let r = 0; r < numeroRighe; r++) {
    for (let c = 0; c < numeroColonne; c++) {
      
      let xCenter = (c * dimColonna) + (dimColonna / 2);
      let yCenter = (r * dimRiga) + (dimRiga / 2);
      
      let dimensioneGlifo = random(dimColonna * 0.4, dimColonna * 0.7);
      
      mioGlifoGenerativo(xCenter, yCenter, dimensioneGlifo);
    }
  }
}

function draw() {
  // put drawing code here
}

function mioGlifoGenerativo (_x, _y, _size) {
  push();
  translate(_x, _y);
  fill(0);
  noStroke();
  
  let yTesta;
  let yGambe;

  //tronco
  let tipoTronco = floor(random(2)); 
  if (tipoTronco === 0) {
    arc(0, -_size * 0.1, _size * 0.8, _size * 0.5, 0, PI);
    yTesta = -_size * 0.15; 
    yGambe = _size * 0.15;  
  } else {
    arc(0, _size * 0.1, _size * 0.7, _size * 0.5, PI, TWO_PI);
    yTesta = -_size * 0.25; 
    yGambe = _size * 0.1;  
  }

  // testa
  let offsetTestaX = random(-_size * 0.15, _size * 0.15); 
  circle(offsetTestaX, yTesta, _size * 0.25);

  // gambe
  push();
  translate(0, yGambe);

  let tipoBase = floor(random(3)); 
  if (tipoBase === 0) {
    arc(0, _size * 0.15, _size * 0.5, _size * 0.6, PI, TWO_PI);
  } else if (tipoBase === 1) {
    noFill();
    stroke(0);
    strokeWeight(_size * 0.15); 
    strokeCap(SQUARE); 
    arc(0, _size * 0.2, _size * 0.4, _size * 0.5, PI, TWO_PI);
  } else {
    fill(0);
    noStroke();
    arc(0, 0, _size * 0.4, _size * 0.4, 0, PI);
  }

  pop(); 
  pop(); 
}