var bg,bgImage;
var bow,bowImage;
var redBalloon,redImage;
var blueBalloon,blueImage;
var greenBalloon,greenImage;
var pinkBalloon,pinkImage;
var arrowImage;
var score=0; 
var redB,blueB,greenB,pinkB,arrowGroup;

function preload(){
 //load your images here 
 bgImage=loadImage("background0.png");
  bowImage=loadImage("bow0.png");
  redImage=loadImage("red_balloon0.png");
  blueImage=loadImage("blue_balloon0.png");
  greenImage=loadImage("green_balloon0.png");
  pinkImage=loadImage("pink_balloon0.png");
  arrowImage=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(0,0,600,600);
  bg.addImage(bgImage);
  bg.scale=2.5;
  
  bow=createSprite(450,300,20,50);
  bow.addImage(bowImage);
  
 redB=new Group();
 greenB=new Group();
 blueB=new Group();
 pinkB=new Group();
 arrowGroup= new Group();
  
}




function draw() {
  bg.velocityX=-3;
  
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  
  bow.y=World.mouseY;
  
  if(keyDown("space")){
    createArrow();
    
  }
  
  var select_balloon=Math.round(random(1,4));
  console.log(select_balloon)

  if(World.frameCount % 80 == 0) {
    if(select_balloon == 1) {
      redBalloon();
    } else if(select_balloon == 2) {
      greenBalloon();
    } else if(select_balloon == 3)  {
      blueBalloon(); 
    } else {   
      pinkBalloon();
    }

 }

  if(arrowGroup.isTouching(redB)){
    arrowGroup.destroyEach();
    redB.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(greenB)){
    arrowGroup.destroyEach();
    greenB.destroyEach();
    score=score+1;
  }
  
  
  if(arrowGroup.isTouching(blueB)){
    arrowGroup.destroyEach();
    blueB.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(pinkB)){
    arrowGroup.destroyEach();
    pinkB.destroyEach();
    score=score+1;
  }
 drawSprites(); 
  textSize(20);
  text("Score:  "+score,450,50)
}



function createArrow(){
  arrow=createSprite(360,100,5,10);
  arrow.velocityX=-6;
  arrow.addImage(arrowImage);
  arrow.scale=0.3;
  arrow.y=bow.y;
  arrow.lifetime=100;
  arrowGroup.add(arrow);
  
}

function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(redImage);
  red.velocityX=3;
  red.lifetime=150;
  red.scale=0.1;
  redB.add(red);
}


function greenBalloon(){
  var green=createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(greenImage);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenB.add(green);
  
}

function blueBalloon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blueImage);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  blueB.add(blue);
}

function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pinkImage);
  pink.velocityX=3;
  pink.lifetime=150;
  pinkB.add(pink);
}