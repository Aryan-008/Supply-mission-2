var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground
var boxLeftBody, boxRightBody, boxBottomBody
var boxLeft, boxRight, boxBottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	 
boxLeft=createSprite(200,200,20,100);
boxLeftBody=Bodies.rectangle(200,200,20,100);
World.add(world,boxLeftBody);

boxRight=createSprite(100,100,20,100);
boxrightBody=Bodies.rectangle(100,100,20,100);
World.add(world,boxRightBody);

boxBottom=createSprite(300,300,200,20);
boxBottomBody=Bodies.rectangle(300,300,200,20);
World.add(world,boxBottomBody);


engine = Engine.create();
world = engine.world; 

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



