const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roofobj;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofobj = new Roof(400,100,400,50);
	bob1 = new Bob(300,300,50);
	bob2 = new Bob(350,300,50);
	bob3 = new Bob(400,300,50);
	bob4 = new Bob(450,300,50);
	bob5 = new Bob(500,300,50);

	rope1 = new rope(bob1.body,roofobj.body,-70,0)
	rope2 = new rope(bob2.body,roofobj.body,-40,0)
	rope3 = new rope(bob3.body,roofobj.body,-10,0)
	rope4 = new rope(bob4.body,roofobj.body, 20,0)
	rope5 = new rope(bob5.body,roofobj.body, 50,0)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 
  roofobj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



