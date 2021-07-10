//Declaring all the variables
var sleep,drink,bath,brush,eat,gym,bg,move;
var bagr,astronaut;
var edges;


function preload(){
  //Loading all the Images
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  //Creating the canvas
  createCanvas(800,400);

  //Making the background Sprite
  bagr = createSprite(400, 200, 50, 50);
  bagr.addImage("background",bg);
  bagr.scale = 0.2;

  //Making the astronaut Sprite
  astronaut = createSprite(400,200,10,10);
  astronaut.addAnimation("astronaut",sleep)
  astronaut.scale = 0.1;

  //Making the edges
  edges = createEdgeSprites();
}

function draw() {
  //Giving background
  background(255,255,255);

  //Bouncing the astronaut off the edges
  astronaut.bounceOff(edges);

  
  //Key events for controlling the astronaut
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("Brushing",brush);
    astronaut.changeAnimation("Brushing");
    astronaut.y =220;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming",gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y = 220;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing",drink);
    astronaut.changeAnimation("Bathing");
    astronaut.y = 220;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat);
    astronaut.changeAnimation("Eating");
    astronaut.y =220;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
  }

  drawSprites();

  // Instructions for the game
  fill("white")
  push();
  textSize(20);
  text("Instructions",10,15);   
  pop();
  text("Up Arrow = Brushing",10,30);
  text("Down Arrow = Gymming",10,45);
  text("Left Arrow = Eating",10,60);
  text("Right Arrow = Bathing",10,75);
  text("M Key = Moving",10,90);
}