
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ground
var ball2,ground2
function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:1
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options)
  ground2=Bodies.rectangle(250,350,400,20,ground_options)
  World.add(world,ground)
  World.add(world,ground2)
  ball=Bodies.circle(100,10,20,ball_options)
  ball2=Bodies.circle(150,30,20,ball_options)
  World.add(world,ball)
  World.add(world,ball2)
}

function draw() 
{
  background(51);
  Engine.update(engine)
  rectMode(CENTER)
  ellipseMode(RADIUS)
  rect(ground.position.x,ground.position.y,400,20)
  rect(ground2.position.x,ground2.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball2.position.x,ball2.position.y,20,20)
}

