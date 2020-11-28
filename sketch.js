
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var ground
var bananaGroup, obstacleGroup;
var rand;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 
  
  //creating monkey
  monkey = createSprite(80, 310, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
    
}


function draw() {
  background("white");
    
  //create ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  
  monkey.collide(ground);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  if(frameCount%30===0){
    survivalTime = survivalTime+1;
  }
  
  //score
  stroke("black")
  textSize(20);
  fill("black");
  textFont("Comic Sans MS"); 
  text("Survival Time:"+survivalTime,150,50)
  
  //banana
  fruit();
  
  //obstacles
  obstacles();
  
  //jump
  if(keyDown("space")&&monkey.y>240&&monkey.velocityY<=0){
    monkey.velocityY = -12;
  }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  drawSprites();
}

function fruit(){
  rand = Math.round(random(150,280));
  if(frameCount%80===0){
    banana = createSprite(420, rand, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 120;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(320,420,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
  }
}