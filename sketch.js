
/* =====================================================================================
   -------------------------------------------------------------------------------------
                                  PROJECT 30 TOWER SIEGE-2                              
    -----------------------------------------------------------------------------------
    ==================================================================================== */

//making bodies constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//defining objects
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14,box15;
var ground, ground1, ground2, slingShot,hexagon;
var backgroundImg;

var box16,box17,box18,box19,box20,box21, box22, box23, box24;
var ground3,ground4, ground5, ground6;

//giving the background party image
function preload(){
  backgroundImg = loadImage("background.jpg");
}

function setup() {
  createCanvas(1400,570);

  //creating the engine
  engine = Engine.create();
  world = engine.world;
  
  //creating grounds to hold the cups
  ground = new Ground(590,270,200,30);
  ground1 = new Ground(600,400,1400,50);
  ground2 = new Ground(590,330,40,89);
  ground3 = new Ground(850, 300, 30, 150);
  ground4 = new Ground(850, 240, 170, 30);
  ground5 = new Ground(1100, 200, 120, 30);
  ground6 = new Ground(1100, 290, 30, 170);

  //creating cups
  //1st stack 1st row
   box1 = new Box(530,235,30,40);
   box2 = new Box(560,235,30,40);
   box3 = new Box(590,235,30,40);
   box4 = new Box(620,235,30,40);
   box5 = new Box(650,235,30,40);

   //1st stack 2nd row
   box6 = new Box(548,197,30,40);
   box7 = new Box(577,197,30,40);
   box8 = new Box(605,197,30,40);
   box9 = new Box(635,197,30,40)
  
   //1st stack 3rd row
   box10 = new Box(563,159,30,40);
   box11 = new Box(594,159,30,40);
   box12 = new Box(625,159,30,40);
   
   //1st stack 4th row
   box13 = new Box(580,121,30,40);
   box14 = new Box(610,121,30,40);

   //1st stack top
   box15 = new Box(595,84,30,40);

   //2nd stack 1st row
   box16 = new Box(810, 191, 30, 40);
   box17 = new Box(840, 191, 30, 40);
   box18 = new Box(865, 191, 30, 40);

   //2nd stack 2nd row
   box19 = new Box(825, 161, 30, 40);
   box20 = new Box(845, 161, 30, 40);

   //2nd stack top
   box21 = new Box(832.5, 131, 30, 40);

   //3rd stack 1st row
   box22 = new Box(1100, 151, 30, 40);
   box23 = new Box(1070, 151, 30, 40);

   //3rd stack top
   box24 = new Box(1085, 121, 30, 40);
   
   //creatng the shooting hexagon
   hexagon = new Hexagon(50,195,40);

   //creating the slingshot
   slingShot = new Slingshot(hexagon.body,{x:250,y:200});

   //runnign the engine
   Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(backgroundImg); 
    //displaying boxes
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
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    //displaying grounds
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();

    //displaying slingshots and hexagon
    slingShot.display();
    hexagon.display();
   
    drawSprites();

    //giving the above text
    fill("yellow");
    strokeWeight(4);
    stroke(0);
    textSize(24);
    text("Drag the hexagonal stone to knockdown all the cups!!! Want another chance, press space!!", 100,20);
}

//creating functions for slingshot
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  slingShot.attach(hexagon.body);
  }
}

// MADE BY HARTEJ NAYAR (CLASS-30)