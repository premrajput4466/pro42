var back_img;
var iss, spacecraft;
var hasDocked = false;
var spacecraft1, spacecraft2, spacecraft3, spacecraft4;  

function preload(){
  back_img = loadImage("spacebg.jpg");
  iss_img = lodeImage("iss.png");
  spacecraft1_img = loadImage("spacecraft1.png");
  spacecraft2_img = loadImage("spacecraft2.png");
  spacecraft3_img = loadImage("spacecraft3.png");
  spacecraft4_img = loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
iss = createSprite(330,130);
iss.addimage(iss_img);
iss.scale = 0.25;

spacecraft = createSprite(285,240);
spacecraft.addimage(spacecraft1_img);
spacecraft.scale = 0.15;
}

function draw() {
  background(back_img);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + RandomSource(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addimage(spacecraft3_img);
      spacecraft.x = spacecraft.x -2;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addimage(spacecraft4_img);
      spacecraft.x = spacecraft.x +2;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addimage(spacecraft1_img);
      spacecraft.y = spacecraft.y +2;
    }
  }

  drawSprites();
}