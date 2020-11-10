var tower,towerImage,door,doorImage,ghost,ghostImage;
var climber,climberImage,block;
var doorsGroup,climbersGroup,blockGroup;
var PLAY=1;
var END=0;
var GameState=PLAY;

function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  ghostImage=loadImage("ghost-standing.png");
  climberImage=loadImage("climber.png");
}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(0,0,600,600);
  tower.addImage(towerImage);
  tower.scale=2;
  tower.velocityY=4;
  
  ghost=createSprite(200,200,300,300);
  ghost.addImage(ghostImage);
  ghost.scale=0.4
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  blockGroup=new Group();
}
function draw(){
  background(255)
  
  
  if(GameState===PLAY){
    
    
  if(tower.y>600){
    tower.y=300;
  }
  if(keyDown("space")){
     
     ghost.velocityY=-3;     
     }
  ghost.velocityY= ghost.velocityY+1;
  
  if(keyDown("right_arrow")){
    
    ghost.x=  ghost.x+3;
  }
  if (keyDown("left_arrow")){
    
    ghost.x=  ghost.x-3;
  }
  
    if(climbersGroup.isTouching(ghost)){
      
      ghost.velocityY=0;
    }
    if(blockGroup.isTouching(ghost)||ghost.y >600){
      ghost.destroy(); 
      GameState=END;
    }
  SpawnDoor();
    drawSprites()
  }
  
  if(GameState===END){
    
  fill("yellow")
    textSize(30)
    text("GAME OVER",300,300);
  }
 
}

function SpawnDoor(){
  if(frameCount%240===0){
    door=createSprite(150,-50,20,20);
    door.x=Math.round(random(100,400));
    door.addImage(doorImage);
    door.scale=0.8;
    door.velocityY=3;
    door.depth=ghost.depth;
     ghost.depth=ghost.depth+1;
    
    climber=createSprite(150,10,20,20);
    climber.addImage(climberImage);
    climber.scale=0.4;
    climber.velocityY=3;
    climber.width=door.width;
    climber.x=door.x;
    
    block=createSprite(150,15,20,20);
    block.width=climber.width;
    block.height=2;
    block.x=door.x;
    block.debug=true;
    block.velocityY=3;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    blockGroup.add(block);
  }
  
  
}  
