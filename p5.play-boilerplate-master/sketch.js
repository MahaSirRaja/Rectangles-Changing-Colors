var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,170,20,20);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(200,200,20,20);
  fixedRect.shapeColor = "green";
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    & fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    & fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    & movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  drawSprites();
}