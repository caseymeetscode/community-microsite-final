let clickSound;

function preload() {
  console.log("Loading sound...");
  // RENAME your file to 'click.wav' in your folder first!
 clickSound = loadSound('assets/click.wav');
    () => console.log("Sound Loaded!"), 
    (err) => console.log("Sound Failed:", err)
  ;
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  
  let exploreBtn = select('.btn-primary');
  if (exploreBtn) {
    exploreBtn.mousePressed(playSuccessSound);
  }
}

function playSuccessSound() {
  userStartAudio();
  if (clickSound && clickSound.isLoaded()) {
    clickSound.play();
  }
  background(102, 252, 241); 
}

function draw() {
  background(11, 12, 16, 25); 
  fill(102, 252, 241);
  noStroke();
  
  // This quad is now relative to your mouse
  quad(mouseX, mouseY, 86, 50, 50, 38, 14, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}