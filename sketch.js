const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4 , box5;
var ground1;
var pig1,pig2;
var bird;
var log1 , log2 , log3 , log4
function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground(700,height,1400,20)

box1= new Box(700,320,70,70);
box2=new Box(920,320,70,70);
pig1 = new Piggies(810,350);
log1=new logs(810,260,300,PI);

box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
pig2 = new Piggies(810,220);
log2=new logs(810,180,300,PI);

box5= new Box(810,160,70,70);
log3 = new logs(760,120,150,PI/7);
log4 = new logs(870,120,150,-PI/7);
bird = new Birds(100,100)

   //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();

   box1.display();
   box2.display();
   pig1.display();
   log1.display();

   
   box3.display();
   box4.display();
   pig2.display();
   log2.display();

   
   box5.display();
   log3.display();
   log4.display();

   bird.display();

}