const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
  //nivel uno
  block1 = new Block(300,275);
  block2 = new Block(330,275);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  //nivel dos
  block8 = new Block(330,235);
  block9 = new Block(360,230);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  //nivel tres
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  //parte superior
  block16 = new Block(390,150);

  //pirámide 2
  //nivel uno
  block17 = new Block(760,160);
  block18 = new Block(730,160);
  block19 = new Block(700,160);
  block20 = new Block(670,160);
  block21 = new Block(640,160);
  //nivel dos
  block22 = new Block(730,130);
  block23 = new Block(700,130);
  block24 = new Block(670,130);
  //nivel tres
  block25 = new Block(700,100);

  var options={
       "restitution":0.8,
       "friction":1.0,
       "density":1.0
  }
  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  slingShot = new slingshot(this.polygon,{x:100,y:200});
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  //pirámide 2
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("pink");
  block25.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,50,50);
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}