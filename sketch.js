//creating   
  var monkey , monkey_running
  var banana ,bananaImage,obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score;
  var survivalTime=0;

//loading images and animation
function preload(){
  
  monkey_running =                            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
//creating canvas  
  createCanvas(500,400);
  
//creating monkeyand adding images
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
  
//creating ground,addingImages,making infinity
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

//creating groups
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
//creating background  
  background(rgb(100,100,100));

//making infinity
if(ground.x<0){
    ground.x=ground.width/2;
}

//space function
if(keyDown("space")&&monkey.y>=314.3){
    monkey.velocityY=-12;
}

//adding gravity
  monkey.velocityY = monkey.velocityY + 0.4;
  
//spawing fruits   
  food();
  
//sapwing obstacles
  spawnObstacle();
 
//making ground invisible
  ground.visible = false;
  
//stop monkey from falling
  monkey.collide(ground);

//drawing sprites
  drawSprites();
  
//displaying text as survivalTime
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime: "+ survivalTime,100,50);
 
if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
}
}

function food(){
  if(frameCount % 80 ===0){
    
 //creating banana,adding images
    var banana =createSprite(350,300,25,25);
//spawing at randomly
    banana.y = Math.round(random(120,200));
    banana.setCollider("circle",0,0,80);
    banana.debug=false;
    banana.addImage(bananaImage);
    banana.velocityX=-10;
    banana.lifetime=100;
    banana.scale=0.1;
    FoodGroup.add(banana);
}
}
function spawnObstacle(){
if (frameCount % 60 ===0){
  
//creating obstacle,adding image
  var obstacle = createSprite(400,330,20,20);
  obstacle.setCollider("circle",0,0,100);
  obstacle.debug=false;
  obstacle.velocityX=-6;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
//spawing at randomly
  var rand = Math.round(random(400,350));
  obstacleGroup.add(obstacle);
}
}