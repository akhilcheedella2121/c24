const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2;
var l1,l2,l3;
var b1,b2,b3,b4,b5;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,355,70,70);
    pig1 = new Pig(880,365);
    box2 = new Box(960,355,70,70);
    ground = new Ground(600,height,1200,20);
   
    l1 = new log(880,310,260,PI/2);
    b3 = new Box(880,265,70,70);
    l2 = new log(840,265,120,PI/4);
    l3 = new log(920,265,120,-PI/4);
}
function draw(){
    background(255,255,255);
    Engine.update(engine);
    console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    l1.display();
    b3.display();
    l2.display();
    l3.display();
}
