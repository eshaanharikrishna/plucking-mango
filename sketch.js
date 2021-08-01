
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var treeobject
var stoneobject
var mango1 
var mango2
var mango3
var mango4
var mango5
var boy
var laucherobject
var engine
var world
var groundobject
function preload()
{
	boy=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	stoneobject=new Stone(235,420,30,30)
treeobject=new tree(1050,580)
mango1=new Mango(1100,100,30,30)
mango2=new Mango(1000,200,30,30)
mango3=new Mango(900,250,30,30)
mango4=new Mango(1200,300,30,30)
mango5=new Mango(950,200,30,30)

groundobject=new Ground(650,580,1300,20)
launcherobject=new launcher(stoneobject.body,{x:235,y:420})


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  image(boy,200,340,200,300)
  treeobject.display()
  stoneobject.display()
groundobject.display()
	launcherobject.display()
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()

		detectcollision(stoneobject,mango1)
        detectcollision(stoneobject,mango2)
		detectcollision(stoneobject,mango3)
		detectcollision(stoneobject,mango4)
		detectcollision(stoneobject,mango5)
	

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneobject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherobject.fly();
}

function keyPressed(){
    if(keyCode === 32){
        launcherobject.attach(stoneobject.body);
    }
}
function detectcollision(a,b){
	mangoposition=b.body.position
	stoneposition=a.body.position
	var distance=dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y)
if(distance<a.width+b.width){
	Matter.Body.setStatic(b.body,false)
}
}


