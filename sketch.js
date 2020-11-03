var bullet,wall;
var speed, weight,thickness; 

function setup() {
  createCanvas(1200, 400);
	speed=random(55,90)
    weight=random(400,1500)
    thickness=random(22,83)
	bullet=createSprite(50,220,50,10);   
	bullet.velocityX = speed;
	bullet.shapeColor=color(255);
  	wall=createSprite(1000,200,thickness,height/2)
  	wall.shapeColor=color(80,80,80)
}
function draw() {
  background(220);      
  drawSprites();
 
function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x + lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge){
    return true }
    return false;
}
if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
   wall.shapeColor=color(255,0,0);
 }
if (damage<10){
    wall.shapeColor=color(0,255,0);
}
  }
}
