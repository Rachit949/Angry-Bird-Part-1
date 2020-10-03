const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig,pig1;
var Log,Log1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    Log=new log(810,250,300,PI/2);
    pig=new Pig(810,350);
    box3= new Box(700,220,50,50);
    box4= new Box(900,220,50,50);
    pig1=new Pig(810,250);
   Log1= new log(810,150,300,PI/2);
    box5=new Box(810,50,50,50);
   Log2= new log(790,50,100,PI/7);
   Log3= new log(830,50,100,-PI/7);
   Bird= new bird(200,200);
  
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig.display();
    Bird.display();
    pig1.display();
    Log.display();
    Log1.display();
    Log2.display();
    Log3.display();
    ground.display();
}