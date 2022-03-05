let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;
var score=0
var starGroup,ast1Group,ast2Group
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg_sur.png");
  star_img = loadImage("star.png")
  asteroid_img = loadImage("asteroid1.png")
  asteroid1_img = loadImage("asteroid2.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,200,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
starGroup = createGroup()
ast1Group = createGroup()
ast2Group = createGroup()

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
 if(keyDown("UP_ARROW")){
   lander.y-=4
 }
 if(keyDown("DOWN_ARROW")){
   lander.y+=4
 }
 if(keyDown("RIGHT_ARROW")){
   lander.x+=4
 }
 if(keyDown("LEFT_ARROW")){
   lander.x-=4
 }
 text("star Collection:"+score,800,100)
 if(starGroup.isTouching(lander)){
score++
starGroup.destroyEach()
 }
 spawnStar()
 spawnAsteroid()
 spawnAsteroid2()
  drawSprites();
}
function spawnStar(){


if(frameCount%100===0){
  star = createSprite(1000,Math.round(random(100,500)))
  star.velocityX=-4
  star.addImage(star_img )
  star.scale=0.2
  starGroup.add(star)
}}

function spawnAsteroid(){
  if(frameCount%150===0){
    asteroid = createSprite(1000,Math.round(random(200,500)))
    asteroid.velocityX=-4
    asteroid.addImage(asteroid_img )
    asteroid.scale=0.2
    ast1Group.add(asteroid)
  }

}

function spawnAsteroid2(){
  if(frameCount%230===0){
    asteroids = createSprite(1000,Math.round(random(100,600)))
    asteroids.velocityX=-4
    asteroids.addImage(asteroid1_img )
    asteroids.scale=0.2
    ast2Group.add(asteroids)
  }
}
