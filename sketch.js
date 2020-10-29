const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var drops = [];
var x, y;
var bat1, bat2, bat3;
var umbrella
var thunder1, thunder2, thunder3, thunder4;
var engine,world;
var rand;
var maxDrops = 100
var thunder
var thunderCreatedFrame

function preload(){
  man1 = loadImage("walking_1.png");
  man2 = loadImage("walking_2.png");
  man3 = loadImage("walking_3.png");
  man4 = loadImage("walking_4.png");
  man5 = loadImage("walking_5.png");
  man6 = loadImage("walking_6.png");
  man7 = loadImage("walking_7.png");
  man8 = loadImage("walking_8.png");
  bat2 = loadImage("bat2.png");
  thunder1=loadImage("thunderbolt/1.png");
  thunder2=loadImage("thunderbolt/2.png");
  thunder3=loadImage("thunderbolt/3.png");
  thunder4=loadImage("thunderbolt/4.png");
}

function setup() {
  engine=Engine.create();
  world=engine.world;

  createCanvas(400,700);
  umbrella=new Umbrella(200,500);
if(frameCount%150===0){
  for(var i=0;i<maxDrops;i++){
    drops.push(new createDrop(random(0,400),random(400)));
  }
  }
} 
function draw() {
  Engine.update(engine)
  background(0,0,50); 
  
  rand=Math.round(random(1,4));

  if(frameCount%80===0){
  thunderCreatedFrame=frameCount
  thunder=createSprite(random(10,370),random(10,30),10,10);
  switch(rand){
  case 1:thunder.addImage(thunder1)
  break;
  case 2:thunder.addImage(thunder2)
  break;
  case 3:thunder.addImage(thunder3)
  break;
  case 4:thunder.addImage(thunder4)
  break;
  default: break;
}
thunder.scale=random(0.3,0.6);
if(thunderCreatedFrame+10===frameCount&&thunder){
  thunder.destroy();
}
umbrella.display();

  
  for (var i = 0; i < maxDrops; i++) {
    drops[i].showDrop();
    drops[i].updateY();    
  }
  
 
  
  drawSprites();
}

}

