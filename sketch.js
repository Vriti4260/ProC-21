var bullet , material;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  bullet= createSprite(400, 200, 30, 5);
  speed=random(205,300);
  thickness=random(42,93);
  weight=random(30,52);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");
  material= createSprite(1200,200,thickness,height/2)
  material.shapeColor=color("grey");
}

function draw() {
  background(0);  
  
  if (hasCollided(bullet,material))
  {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if (damage>10)
{
  material.shapeColor=color(255,0,0);
}

if (damage<10)
{
  material.shapeColor=color(0,255,0);
}
  }
  drawSprites();
}

function hasCollided( lbullet , lmaterial ){
bulletRightEdge=lbullet.x+lbullet.width;
materialLeftEdge=lmaterial.x;
if(bulletRightEdge>=materialLeftEdge)
{
  return true;
}
return false;
}

