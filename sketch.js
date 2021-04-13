const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2, ground;

var block1, block2, block3, block4, 
block5, block6, block7, block8, 
block9, block10, block11, block12, 
block13, block14, block15, block16;

var block17, block18, block19, block20,
block21, block22, block23, block24, block25;

var polygonObject, polygonImage;

var slingShot;

function preload() {
	polygonImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	Engine.run(engine);

	//Create the Bodies Here.
	stand1 = new Ground(490, 550, 315, 10, 172, 66, 67);
	stand2 = new Ground(940, 350, 235, 10, 172, 66, 67);

	ground = new Ground(width/2, 585, width, 10, 212, 175, 55);

	block1 = new Block(370, 540, "blue");
	block2 = new Block(410, 540, "blue");
	block3 = new Block(450, 540, "blue");
	block4 = new Block(490, 540, "blue");
	block5 = new Block(530, 540, "blue");
	block6 = new Block(570, 540, "blue");
	block7 = new Block(610, 540, "blue");
	block8 = new Block(410, 450, "pink");
	block9 = new Block(450, 450, "pink");
	block10 = new Block(490, 450, "pink");
	block11 = new Block(530, 450, "pink");
	block12 = new Block(570, 450, "pink");
	block13 = new Block(450, 415, "turquoise");
	block14 = new Block(490, 415, "turquoise");
	block15 = new Block(530, 415, "turquoise");
	block16 = new Block(490, 355, "grey");

	block17 = new Block(860, 340, "blue");
	block18 = new Block(900, 340, "blue");
	block19 = new Block(940, 340, "blue");
	block20 = new Block(980, 340, "blue");
	block21 = new Block(1020, 340, "blue");
	block22 = new Block(900, 250, "turquoise");
	block23 = new Block(940, 250, " turquoise");
	block24 = new Block(980, 250, "turquoise");
	block25 = new Block(940, 215, "pink");

	polygonObject = Bodies.circle(100, 400, 25);
	World.add(world, polygonObject);

	slingShot = new SlingShot(this.polygonObject, {x:105, y:300});
}


function draw() {
  background(55, 43, 43);
  rectMode(CENTER);
  
  //Stands display
  stand1.display();
  stand2.display();
  ground.display();

  //Blocks Set 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //Blocks Set 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  imageMode(CENTER);
  image(polygonImage, polygonObject.position.x, polygonObject.position.y, 55, 55);

  slingShot.display();
  
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygonObject, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}
