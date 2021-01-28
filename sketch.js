var bg,backgroundImg;
var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;


function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
   
    cat=createSprite(600,500);
    cat.addAnimation("catSitting",cat1);
    cat.scale=0.09;

    mouse=createSprite(150,500);
    mouse.addAnimation("mouseholding",mouse1);
    mouse.scale=0.07;

    
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width){
           cat.velocityX = cat.velocityX* (0);
           mouse.velocityX = cat.velocityX * (0);
           cat.addAnimation("lastcatImg",cat3);
           cat.changeAnimation("lastcatImg");
           mouse.addAnimation("lastmouseImg",mouse3);
           mouse.changeAnimation("lastmouseImg");
   
        }
       
 if (cat.y - mouse.y < mouse.height/2 + cat.height/2
   && mouse.velocity.y - cat.y < mouse.heifht/2 + cat.height/2){
       cat.velocityY = cat.velocityY * (0);
       mouse.velocityY = cat.velocityY * (0);
           cat.addAnimation("lastcatImg",cat3);
           cat.changeAnimation("lastcatImg");
           mouse.addAnimation("lastmouseImg",mouse3);
           mouse.changeAnimation("lastmouseImg");

   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouse2);
      mouse.changeAnimation("mouseTeasing");

      
  }



}
