var barco, mar, barcoanimacion, marimagen, iceberg, icebergimagen,hundiendose, barcohundiendo;

function preload(){
barcoanimacion=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
marimagen=loadImage("sea.png");
icebergimagen=loadImage("iceberg.png");
hundiendose=loadAnimation("Hundiendose-1.png","Hundiendose-2.png","Hundiendose-3.png","Hundiendose-4.png");
}

function setup(){
  createCanvas(600,485);
  //Barco, fondo y iceberg
  barco=createSprite(125,260,50,50);
  barco.addAnimation("Barco moviendose",barcoanimacion);
 barcohundiendo=createSprite(125,260,50,50);
 barcohundiendo.visible=false; 
 barcohundiendo.addAnimation("Barquito hundiendose", hundiendose);
 
  mar=createSprite(600,242,600,485);
  mar.addImage("Mar inmovil", marimagen);
  
iceberg=createSprite(950,280,50,5);
iceberg.addImage("Iceberg inmovil",icebergimagen);

  //Medidas y acoplamiento con el canvas
  mar.scale=0.29;
  mar.depth=barco.depth-1;
  barco.scale=0.29;
  iceberg.scale=0.29;
  barcohundiendo.scale=0.29;
}

function draw() {
  background("blue");
 mar.velocityX=-2;
 iceberg.velocityX=-2;
  if (mar.x<0) {
  mar.x=600; 
}
if (iceberg.isTouching(barco)) {
  iceberg.velocityX=0;
  mar.velocityX=0;
  barco.visible=false;
  barcohundiendo.visible=true;
  barcohundiendo.velocityY=10;
  
  }

  drawSprites();
}