var movingRect, fixedRect;
var box, box_2;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  box = createSprite(400,300,50,50);
  box.shapeColor = "blue"
  box_2 = createSprite(600,500,50,50)
  box_2.shapeColor = "purple"

  
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY  
  
  if(isTouching(movingRect,box)){
    movingRect.shapeColor = "red"
    box.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
  box.shapeColor = "blue" 
  }
  drawSprites();
}
