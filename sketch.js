
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2
var roof


function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var startBobX = width / 2
	var startBobY = height / 4 + 500
	var bobDiameter = 40;

	//Create the Bodies Here.
	roof = new Roof(width / 2, height / 4, width / 7, 20)
	bob1 = new Bob(startBobX - bobDiameter * 2, startBobY, bobDiameter)
	bob2 = new Bob(startBobX - bobDiameter, startBobY, bobDiameter)
	bob3 = new Bob(startBobX, startBobY, bobDiameter)
	bob4 = new Bob(startBobX + bobDiameter, startBobY, bobDiameter)
	bob5 = new Bob(startBobX + bobDiameter * 2, startBobY, bobDiameter)

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter * 2, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter * 1, 0)
	rope3 = new Rope(bob3.body, roof.body, 0, 0)
	rope4 = new Rope(bob4.body, roof.body, bobDiameter * 1, 0)
	rope5 = new Rope(bob5.body, roof.body, bobDiameter * 2, 0)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");


	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display()
	rope3.display();
	rope4.display()
	rope5.display();
















	drawSprites();

}
function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -50, y: -45 })
	}

}


