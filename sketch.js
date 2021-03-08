var cat,catAni,mouse,mouseAni,garden;
function preload() {
    //load the images here
    catAni=loadAnimation("images/cat1.png","cat2.png","cat3.png","cat4.png");
    cat.addAnimation("CAT",catAni);cat.addAnimation("CAT",catAni);
    mouse=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    garden=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(100,200,50,50);
    
    cat.scale=0.5;
    mouse=createSprite(300,200,50,50);
    mouse.addAnimation("MOUSE",mouseAni);
    mouse.scale=0.5;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyPressed("leftArrow")){
    cat.velocityX=-5;
    cat.addAnimation("CATANI",cat)
}

}
