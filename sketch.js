
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	bob1 = new Bob(150,250,10,10);
	bob2 = new Bob(200,300,10,10);
	bob3 = new Bob(250,350,10,10);
	bob4 = new Bob(300,400,10,10);
	bob5 = new Bob(350,450,10,10);

	roof = new Roof(400,150,600,50);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display("orange");
  bob2.display("red");
  bob3.display("yellow");
  bob4.display("pink");
  bob5.display("white");

  roof.display("blue");
  
  drawSprites();
 
}



