var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle ;
var plinko = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
var count = 0;
var gameState="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinko.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinko.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinko.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinko.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  
  fill("white");
  textSize(10)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
 ground.display();

  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }

   for (var i = 0; i < plinko.length; i++) {
     
     plinko[i].display();
     
     for (var j = 0; j < particle.length; j++) {
   
      particle[j].display();
    }

    if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
     score=score+500;
     particles.pop();
    }
   else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
     score = score + 100;
     particles.pop();
   }
   else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
     score = score + 200;
     particles.pop();
   }
  }
   if(frameCount%60===0){
     particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}
