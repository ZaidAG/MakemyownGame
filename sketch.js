const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var groundBelow,globby
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);


  groundBelow=new Ground(400,670,900,40)
  globby=new Glob(0,540,40)
}

function draw() {
  background(255,255,255);  
  groundBelow.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode==="space"){
   
  }
  if(keyCode===DOWN_ARROW){

  }
}