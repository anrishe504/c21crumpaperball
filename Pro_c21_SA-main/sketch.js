const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1,button2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground =new Ground(width/2,670,width,20);
  left = new Ground(1100,600,20,120);
  right = new Ground(1300,600,20,120);
  
  var ball_options = {
    isStatic:false,
    restitution : 0.95,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

}

function keyPressed(){
  console.log("ok");
  if(keyCode === UP_ARROW){
    console.log("hi");
    Matter.Body.applyForce(ball,ball.position,{x:100,y:100});
  }  
}

