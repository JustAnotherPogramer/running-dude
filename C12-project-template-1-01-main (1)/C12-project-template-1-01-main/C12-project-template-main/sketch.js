var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 pathImg = loadImage ("path.png");
boyImg = loadAnimation("jake1.png", "jake2.png");

}

function setup(){
 path = loadImage ("path.png");
  createCanvas(400,400);

  path = createSprite(200,300);
  path.addAnimation ("bart simpson2", pathImg);
  path.scale=1.2;

boy = createSprite(200,300);
boy.addAnimation ("bart simpson", boyImg);
boy.scale=0.8;




leftBoundary=createSprite(0,0,100,800);

rightBoundary=createSprite(410,0,100,800);

}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX;
  
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
