const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300
var ground
var divison1,divison2
var score=0;
function setup() {
  createCanvas(480,800); 
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,790,800,20)
  for (var k = 0; k <=innerWidth; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  } 
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75,5));
  } 
  for (var j =15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175,5));
  } 
  for (var j = 35; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,5));
  }

   for (var j = 25; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,5));
  }

}

function draw() {
  background(0);  
  Engine.update(engine);
ground.display()
for(var k=0; k < divisions.length; k++){
  divisions[k].display();
}
for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 5,5));
  score++;
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
}