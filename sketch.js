
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=bodies.rectangle(width/2,400,width,10)
		isstatic:true
	
	world.add(world,ground);
		paper=new paperball(100,300,10);
	dustbin=new Dustbin(720,390,100,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  drawSprites();
 
}
function keypreesed(){
    if(keycode===UP_ARROW){
Matter.body.applyforce(paper.body,paper.body.position,{x:85,y:-85});
	}}