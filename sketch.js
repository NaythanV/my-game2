var gameState = 0;
var level = 0;
var welcomeScreen, spaceImg,playerName, spacetravelerImg, keeperImg, gateImg, platform1Img, platform2Img;
var gate, centurioun, space_traveller;
var timer = 1000;


function preload() {
  spaceImg = loadImage("./assets/space.jpg");
  gateImg = loadImage("./assets/gate.jfif");
  spacetravelerImg = loadImage("./assets/spacetraveler.png");
  keeperImg = loadImage("./assets/keeperImg.png");
  spaceImg_Lv1 = loadImage("./assets/space2.jpg");
  platform1Img = loadImage("./assets/stoneplatform1.png");
  platform2Img = loadImage("./assets/stoneplatform3.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  welcomeScreen = new Welcome()
  ground = createSprite(width/2,height -10,width,20)
  gate = createSprite(width/2,height/2)
  centurioun = createSprite(width/2+300,height/2)
  space_traveller = createSprite(width/2-400,height/2)
  platform1 = createSprite(width/2 -500,height/2+200)
  platform2 = createSprite(width/2 +400,height/2+100)

  gate.addImage(gateImg)
  centurioun.addImage(keeperImg)
  space_traveller.addImage(spacetravelerImg)
  platform1.addImage(platform1Img)
  platform2.addImage(platform2Img)
  platform1.scale = 0.15
  platform2.scale = 0.15

  //gate.scale = 0.8
  gate.visible = false;
  centurioun.visible = false;
  space_traveller.visible = false; 
  platform1.visible = false;
  platform2.visible = false;

}

function draw() {
  background(spaceImg)
  if(gameState==0){
    welcomeScreen.display()
  }
  if(gameState==1){
    if(level==0){
        welcomeScreen.hide()
        gate.visible = true;
        centurioun.visible = true;
        space_traveller.visible = true;
        //gate.velocity.x = 2
        if(space_traveller.collide(gate)) {
          level = 1;
        }
    }
    if(level==1){
      gate.remove();
      centurioun.remove();
      spaceImg = spaceImg_Lv1;
      platform1.visible = true;
      platform2.visible = true;
      space_traveller.scale = 0.75;
    }
    playerControls()
   
  
  }
  space_traveller.collide(ground)
  drawSprites()
  textOnScreen()
  //playerControls()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function textOnScreen(){
  if(level == 0 && gameState == 1){
    if(timer>0){
      timer-=1
    }
    //console.log(timer)
    fill(255)
    strokeWeight(4)
    stroke(0)
    textSize(20)
    if(timer>=750){
      text("HALT, WHO GOES THERE!",650,190)
    }
    else if(timer<750 && timer>=500){
      text("FOR IM THE GARDIAN OF THIS GATE TO AN ETERNAL DOOM. ",650,190)
    }
    else if(timer<500 && timer>=250){
      text("IF YOU DARE STEP AHEAD AND ENTER THE GATE OR ELSE DIE.",600,190)
    }
    else if(timer<250 && timer>=1){
      fill("red")
      textSize(25)
      text("YOU ARE WASTING MY TIME , I WONT HESITATE TO KILL YOU. ",600,190)
    }
  }
}

function playerControls() {

  if (keyIsDown("space")) {
  space_traveller.velocity.y = -15
  }

  if (keyIsDown(LEFT_ARROW) /*&& space_traveller.x > 50*/) {
    console.log(space_traveller.position.x)
    space_traveller.position.x -= 5;
   
  }

  if (keyIsDown(RIGHT_ARROW) /*&& space_traveller.x < width -50*/) {
    console.log(space_traveller.position.x)
    space_traveller.position.x += 5;
    
  }
  space_traveller.velocity.y += 0.5
}