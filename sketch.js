var rocket
var space
var robot
var gameState=(1)
var PLAY=1
var END=2
var gameOver
var score=0

function preload(){
rocketImg=loadImage("rocket.png")
spaceImg=loadImage("space.jpg")
robotImg=loadImage("rob.png")
gameOverImg=loadImage("gameover.png")
}

function setup() {
 createCanvas(400,800)
 
    space=createSprite(200,400);
    space.addImage(spaceImg);
    space.scale=2.9
    space.velocityY=2

    rocket=createSprite(200,730)
    rocket.addImage(rocketImg);
    rocket.scale=0.18

    gameOver=createSprite(200,400);
    gameOver.addImage(gameOverImg);
    gameOver.scale=0.8
    gameOver.visible=false

    robotG=new Group();
}

function draw() {
 
    background("red");
   
    score=frameCount/60
    textSize(25);
    text("score "+score,350,50);
    
    

  if(gameState===(1))  {
    if(space.y===450){
        space.y=400
    }

    rocket.depth=robotG.depth-1
        
    rocket.x=mouseX

    spawnRobot();

    if(rocket.isTouching(robotG)){
        gameState=2
    }
  }

  if(gameState===2){
      robotG.destroyEach()
      space.velocityY=0
      gameOver.visible=true
  }

    drawSprites();
}

function spawnRobot(){
  if(World.frameCount%70===0){
    robot=createSprite(Math.round(random(40,width-40)),30);
    robot.addImage(robotImg);
    robot.velocityY=2;
    robot.scale=0.1;
    robot.setLifetime=400;
    robotG.add(robot)
  }
}
