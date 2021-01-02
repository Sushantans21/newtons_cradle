
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new roof(350,100,400,30);
	bob1 = new bob(250,500,50);
	bob2 = new bob(300,500,50);
	bob3 = new bob(350,500,50);
	bob4 = new bob(300,500,50);
	bob5 = new bob(400,500,50);
	bob6 = new bob(450,500,50);
	rope1 = new rope(bob1.body,roof.body);
	rope2 = new rope(bob2.body,roof.body);
	rope3 = new rope(bob3.body,roof.body);
	rope4 = new rope(bob4.body,roof.body);
	rope5 = new rope(bob5.body,roof.body);
	rope6 = new rope(bob6.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#ffff");
  //Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  drawSprites();
 
}



