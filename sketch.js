
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;

var ground,ground1,ground2,ground3;

var bird, slingshot;

var gameState = "onSling";





function setup(){
var canvas=createCanvas(1400,400);
engine = Engine.create();
world = engine.world;

box1 = new Box(1000,390,40,40);

box2 = new Box(1025,390,40,40);
box3 = new Box(1050,390,40,40);
box4 = new Box(1015,370,40,40);
box5 = new Box(1030,370,40,40);
box6 = new Box(1020,330,40,40);
box7 = new Box(700,390,40,40);
box8 = new Box(725,390,40,40);
box9 = new Box(750,390,40,40);
box10 = new Box(715,370,40,40);
box11 = new Box(730,370,40,40);
box12 = new Box(720,330,40,40);
box13 = new Box(1000,390,40,40);
box14 = new Box(1025,390,40,40);
box15 = new Box(1050,390,40,40);
box16 = new Box(1015,370,40,40);
box17 = new Box(1030,370,40,40);
box18 = new Box(1020,330,40,40);

ground = new Ground(600,height,1800,20);
ground1 = new Ground(1030,height,250,200);
ground2 = new Ground(220,height,180,365);
ground3 = new Ground(750,height,350,200);

bird = new Bird(200,50);


 //log6 = new Log(230,180,80, PI/2);
 slingshot = new SlingShot(bird.body,{x:200, y:50});

}
function draw(){
    background("black");
    Engine.update(engine);

    //strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();

    bird.display();
    

   // log6.display();

   slingshot.display(); 

}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  //  }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1 ){

       slingshot.attach(bird.body);
       bird.trajectory=[];
       Matter.Body.setPosition(bird.body,{x:200,y:50});
    }
}
