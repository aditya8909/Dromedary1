


var camelImage,dead,backgroundImg,groundImg,camel,ground;
function preload()
{
	groundImg=loadImage("ground.png")
	backgroundImg=loadImage("bg.png")
	camelImage=loadAnimation("camel1.png","camel2.png")
	// camelImage=loadImage()
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    



 ground=createSprite(width/2,height-15,1,1)
	ground.addImage(groundImg)
	// ground.x = width/2
	ground.velocityX = -10;
 camel=createSprite(225,500,10,10)
camel.addAnimation("run",camelImage)
camel.scale=0.490

}


function draw() {

  background(backgroundImg);


  if (ground.x < 0){
	ground.x = ground.width/2;
  }

  
  drawSprites();
 
}



