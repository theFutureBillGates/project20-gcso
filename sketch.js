var wall,car;
var speed,weight;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  //speed = random(55,90);
  speed=50;
  weight = random(1400,5000);

  car = createSprite(0,340,25,25);
  car.velocityX = speed;
  car.shapeColor=color(255,255,255);

  wall = createSprite(760,340,20,240);
  wall.shapeColor = color(100,150,200);
}

function draw() {
  background(255,255,255);  
  
  car.collide(wall);
  car.shapeColor = color(0,0,0);

  console.log(car.x);

 if(car.x >735) {
    var deformation = 0;
    deformation = 0.5*weight*speed*speed/22500;
    
    if(deformation<=100){
      car.shapeColor = color(255,0,0);
    }
    
    if(deformation>100 && deformation<180){
      car.shapeColor = color(0,0,250);
    }
    
    if(deformation>=180){ 
      car.shapeColor = color(0,250,0);
    }
 }

  drawSprites();
}